const express = require('express');
const router = express.Router();
const ValidateCode = require("../models/validateCode");
const session = require('express-session');
const MongoSessionStore = require('connect-mongo')(session);

router.use(session({
    secret: 'wuxiaoran',
    key: 'patient', // db_config.module.database,//cookie name
    name: 'patient',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 days
        secure: false,
    },
    resave: false,
    saveUninitialized: true,
    store: new MongoSessionStore({
        db: 'sessions',
        url: 'mongodb://patient:patient@127.0.0.1/patient',
    }),
}));
router.post('/validate_code', function (req, res) {
    const { phone } = req.body;
    if (!!phone) {
        let code = ~~(Math.random() * (10 ** 4));
        if (code > 1000) {
            code = `${code}`.padStart(4, 0);
        }
        ValidateCode.update(
            { phone },
            {"$set": { code }},
            {upsert: true},
            (err, data) => {
                if (err) {
                    console.log(err);
                    res.json({
                        status: 'fail',
                        message: '数据库错误!'
                    })
                } else {
                    console.log(data);
                    res.json({
                        status: 'success',
                        data: {
                            code,
                        }
                    })
                }
            })
    } else {
        res.json({
            status: 'fail',
            message: '请输入手机号码!',
        });
    }
});


module.exports = router;
