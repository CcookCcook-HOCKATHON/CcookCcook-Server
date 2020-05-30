var express = require('express');
var router = express.Router();
const homeController = require('../controllers/hoomeController');

router.get('/rank', homeController.readRank);
router.get('/:filter_idx', homeController.readFilter);

module.exports = router;
