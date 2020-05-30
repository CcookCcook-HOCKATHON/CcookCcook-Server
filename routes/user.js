var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/like', userController.readUserLike);

module.exports = router;
