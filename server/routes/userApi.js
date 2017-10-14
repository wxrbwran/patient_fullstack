const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const config = require('../config');
const { decodeToken } = require('../util/decodeToken');
const User = require('../models/user');


router.get('/info',
  jwt({secret: config.token.secret}),
  function (req, res) {
    const token = req.headers['authorization'];
    const { uid } = decodeToken(token);
    User.findById(uid, function (err, user) {
      if (err) {
        return res.json({
          status: 'fail',
          message: `数据库错误, ${err.stack}`,
        });
      }
      return res.json({
        status: 'success',
        data: {
          name: user.name || `用户${user.tel}`,
          weight: user.weight,
          height: user.height,
          waistline: user.waistline,
          tel: user.tel,
          sex: user.sex,
          BMI: user.BMI,
          marriage: user.marriage,
          education: user.education,
          birthday: user.birthday,
          area: user.area,
          bindingDoctor: user.bindingDoctor,
        },
      });
    });
  });

router.patch('/',
  jwt({secret: config.token.secret}),
  function (req, res) {
    const token = req.headers['authorization'];
    const { uid } = decodeToken(token);
    User.findById(uid, function (err, user) {
      if (err) {
        return res.json({
          status: 'fail',
          message: `数据库错误, ${err.stack}`,
        })
      }  else if (user) {
        console.log(user);
        User.update({_id: uid}, {$set: {...req.body}},
          function (err, resp) {
          if (err) {
            res.json({
              status: 'fail',
              message: `数据库错误, ${err.stack}`,
            })
          } else {
            res.json({
              status: 'success',
              data: resp,
            })
          }
        });
      }
    });
  });

module.exports = router;
