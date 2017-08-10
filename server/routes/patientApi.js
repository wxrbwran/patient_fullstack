const express = require('express');
const router = express.Router();
const ValidateCode = require("../models/validateCode");
const User = require("../models/user");

router.post('/register', function (req, res) {
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

module.exports = router;
