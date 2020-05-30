var express = require('express');
var router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/:recipe_idx/like', recipeController.postLike);

module.exports = router;
