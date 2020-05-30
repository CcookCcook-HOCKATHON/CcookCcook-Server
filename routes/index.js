var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/home', require('./home'));
router.use('/recipe', require('./recipe'));
router.use('/user', require('./user'));

module.exports = router;
