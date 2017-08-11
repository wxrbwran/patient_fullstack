const express = require('express');
const router = express.Router();
const jsonwebtoken  = require('jsonwebtoken');
const jwt = require('express-jwt');
const config = require('../config');
const ValidateCode = require("../models/validateCode");
const User = require("../models/user");

router.post('/validate_code', function (req, res) {
  const { phone } = req.body;
  if (!!phone) {
    let code = ~~(Math.random() * (10 ** 4));
    if (code > 1000) {
      code = `${code}`.padStart(4, 0);
    }
    // req.session.code = code;
    // res.json({
    //   status: 'success',
    //   data: {
    //     code,
    //   }
    // });
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

router.post('/register', function (req, res) {
  // console.log(req.session, req.session.code);
  const { phone, code, password } = req.body;
  if (!!phone && !!code && !!password) {
    ValidateCode.find({phone, code}, function (err, data) {
      if (err) {
        res.json({
          status: 'fail',
          message: err.stack,
        });
      } else if (data.length === 1){
        User.find({phone}, function (err, users) {
          if (err) {
            res.json({
              status: 'fail',
              message: err.stack,
            });
          } else {
            if (users.length > 0) {
              res.json({
                status: 'fail',
                message: '该手机号码已被注册!',
              });
            } else {
              const user = new User({
                phone,
                password,
              });
              user.save()
                .then(userRes => {
                  res.json({
                    status: 'success',
                    data: null,
                  });
                })
                .catch(err => {
                  res.json({
                    status: 'fail',
                    message: err.stack,
                  });
                });
            }
          }
        })
      } else {
        res.json({
          status: 'fail',
          message: '验证码错误!',
        });
      }
    })
  } else {
    res.json({
      status: 'fail',
      message: '请输入注册信息!',
    });
  }
});
router.post('/login', function (req, res) {
  const { grant_type } = req.body;
  if (grant_type === 'password') {
    const { phone, password } = req.body;
    if (!!phone && !!password) {
      User.find({phone, password})
        .then(user => {
          if (user.length === 1) {
            const token = jsonwebtoken.sign({
              uid: user[0]['_id'],
              phone: user[0]['phone'],
            }, config.token.secret, {
              expiresIn: config.token.expired
            });
            const refresh_token = jsonwebtoken.sign({
              uid: user[0]['_id'],
              phone: user[0]['phone'],
            }, config.token.secret, {
              expiresIn: config.token.refresh
            });
            res.json({
              status: 'success',
              token,
              refresh_token,
              data: {
                phone,
              },
            });
          } else {
            res.json({
              status: 'fail',
              message: '用户名或密码错误!',
            });
          }
        })
        .catch(() => {
          res.json({
            status: 'fail',
            message: '数据库错误!',
          });
        })
    } else {
      res.json({
        status: 'fail',
        message: '请输入登录信息!',
      });
    }
  }
  else if (grant_type === 'refresh_token') {
    const refresh_token = req.body.refresh_token;
    var decoded = jsonwebtoken.verify(refresh_token,
      config.token.secret);
    const { uid, exp } = decoded;
    console.log(exp, Date.now());
    if (exp * 1000 > Date.now()) {
      User.findById(uid, function (err, user) {
        console.log(err, user);
        if (err) {
          res.json({
            status: 'fail',
            message: '用户不存在!',
          });
        } else if (user) {
          const token = jsonwebtoken.sign({
            uid: user['_id'],
            phone: user['phone'],
          }, config.token.secret, {
            expiresIn: config.token.expired
          });
          const refresh_token = jsonwebtoken.sign({
            uid: user['_id'],
            phone: user['phone'],
          }, config.token.secret, {
            expiresIn: config.token.refresh
          });
          res.json({
            status: 'success',
            token,
            refresh_token,
            data: {
              phone: user['phone'],
            },
          });
        } else {
          res.json({
            status: 'fail',
            message: '用户不存在!',
          });
        }
      })
    } else {
      res.status(405).json({
        status: 'fail',
        message: '登录超时!',
      });
    }
  }

});


router.get('/user/info',
  jwt({secret: config.token.secret}),
  function (req, res) {
    res.json({
      status: 'success',
      data: {
        name: '吉尔伽美什',
      }
    });
});

module.exports = router;
