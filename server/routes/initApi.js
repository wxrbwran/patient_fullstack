const express = require('express');
const router = express.Router();
const jsonwebtoken  = require('jsonwebtoken');
const jwt = require('express-jwt');
const config = require('../config');

router.post('/',
  jwt({secret: config.token.secret}),
  function (req, res) {
    res.json({
      status: 'success',
      data: null,
    })
});

module.exports = router;
