const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoSessionStore = require('connect-mongo')(session);
const helmet = require('helmet');
const csurf = require('csurf');

const config = require('./config');
const index = require('./routes/index');
const patientApi = require('./routes/patientApi');
const initApi = require('./routes/init');

// const rest = require('./routes/restful-api');

const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect(`mongodb://${config.db.user}:${config
  .db.password}@127.0.0.1/${config.db.name}`, {
  useMongoClient: true,
});

const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open', () => {
  console.log('已成功连接数据库');
  //成功连接
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
/*
* 每个请求都在一个域中处理是一种好的做法，
* 这样你就可以追踪那个请求中所有的未捕获错误并做出相应的响应（正常地关闭服务器）。
* 添加一个中间件就可以非常轻松地满足这 个要求。
* 这个中间件应该在所有其他路由或中间件前面：
* */
app.use(function(req, res, next) {
  // 为这个请求创建一个域
  var domain = require('domain').create();
  // 处理这个域中的错误
  domain.on('error', function(err) {
    console.error('DOMAIN ERROR CAUGHT\n', err.stack);
    try {
      // 在 5 秒内进行故障保护关机
      setTimeout(function() {
        console.error('Failsafe shutdown.');
        process.exit(1);
      }, 5000);
      // 从集群中断开
      var worker = require('cluster').worker;
      if (worker) worker.disconnect();
      // 停止接收新请求
      server.close();
      try {
        // 尝试使用 Express 错误路由
        next(err);
      } catch (err) {
        // 如果 Express 错误路由失效，尝试返回普通文本响应
        console.error('Express error mechanism failed.\n', err.stack);
        res.statusCode = 500;
        res.setHeader('content-type', 'text/plain');
        res.end('Server error.');
      }
    } catch (err) {
      console.error('Unable to send 500 response.\n', err.stack);
    }
  });
  // 向域中添加请求和响应对象
  domain.add(req);
  domain.add(res);
  // 执行该域中剩余的请求链
  domain.run(next);
});

// require('./controllers/customer').registerRoutes(app);
switch (app.get('env')) {
  case 'production':
    app.use(
      morgan('combined', {
        skip: function(req, res) {
          return res.statusCode < 400;
        },
      }),
    );
    break;
  case 'development':
  default:
    app.use(logger('dev'));
    break;
}
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression({ filter: function(req, res) {
  if (req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
}}));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config.cookieSecret));
app.use(session({
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, //1 days
    name: 'patient',
    secret: config.cookieSecret,
    key: 'patient',
    // 强制把session写入存储，即使session在整个请求过程中都没有被修改。
    resave: false,
    // 保存新建的但没有被改动的session。
    saveUninitialized: false,
    store: new MongoSessionStore({
      db: 'sessions',
      url: `mongodb://${config.db.user}:${config
        .db.password}@127.0.0.1/${config.db.name}`,
    }),
  }),
);

app.use('/', index);
app.use('/api/patient', require('cors')(), patientApi);
app.use('/api/patient', require('cors')(), initApi);

app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err.stack);
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({
      status: 401,
      message: 'token has expired',
    })
  } else if (req.xhr) {
    res.status(500).send({ error: err.stack });
  } else {
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  }
});

module.exports = app;
