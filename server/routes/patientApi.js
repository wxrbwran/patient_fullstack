const express = require('express');
const router = express.Router();

router.post('/add', function (req, res) {
  if (!!req.body.content) {
    const todo = new Todo({
      content: req.body.content,
      date: Date.now(),
    });
    todo.save(err => {
      if(err) {
        return res.json({
          status: 'fail',
          data: {},
          message: '数据库错误',
          stack: err.stack,
        })
      }
      return res.json({
        status: 'success',
        data: {
          content: req.body.content,
          date: Date.now(),
        },
      })
    })
  } else {
    return res.json({
      status: 'fail',
      data: {},
      message: '内容不能为空!'
    })
  }
});

module.exports = router;
