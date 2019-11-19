var express = require('express');
var router = express.Router();

const authRouter = require('./auth');

// *  '/auth'
router.use('/auth', authRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Auth Demo' });
});

module.exports = router;
