var express = require('express');
var router = express.Router();
const homeController = require('../controllers/hoomeController');

router.get('/rank', homeController.readRank);

module.exports = router;
