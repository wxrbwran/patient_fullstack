var express = require('express');
var router = express.Router();
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    const fileNameArray = file.originalname.split('.');
    const ext = fileNameArray[fileNameArray.length - 1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});
const upload = multer({ storage });

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', {
    title: 'Express',
    userName: !!req.session ? req.session.userName : null,
  });
});

router.get('/about/:userId', function(req, res, next) {
  res.type('text/plain');
  console.log(req.params, req.query, req.body, req.xhr, req.url);
  res.send('about');
});

router.get('/test', function(req, res, next) {
  const data = {
    currency: { name: 'United States dollars', abbrev: 'USD' },
    tours: [
      { name: 'Hood River', price: '$99.95' },
      { name: 'Oregon Coast', price: '$159.95' },
    ],
    specialsUrl: '/january-specials',
    currencies: ['USD', 'GBP', 'BTC'],
  };
  res.render('test', {
    currency: data.currency,
    tours: data.tours,
    specialsUrl: data.specialsUrl,
    currencies: data.currencies,
  });
});

router.get('/newsletter', function(req, res) {
  res.cookie('monster', 'mom mon');
  res.cookie('signedMonster', 'mom mon11', { signed: true });
  // 我们会在后面学到 CSRF……目前，只提供一个虚拟值
  res.render('news_letter', { csrf: 'CSRF token goes here' });
});

router.post('/process', upload.single('photo'), function(req, res) {
  const cookie = req.cookies.monster;
  const signedCookie = req.signedCookies.signedMonster;
  res.clearCookie('monster');
  if (req.xhr) {
    console.log(req.file, req.body);
    req.session.userName = req.body.name;
    // res.json({ success: true });
  } else {
    console.log('Form (from querystring): ' + req.query.form);
    console.log('CSRF token (from hidden form field): ' + req.body._csrf);
    console.log('Name (from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    req.session.flash = {
      type: 'danger',
      intro: 'Validation!',
      message: 'The email address',
    };
    req.session.userName = req.body.name;
    res.redirect(303, '/home');
  }
});


module.exports = router;
