var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/recipe', userController.readUserRecipe);
router.get('/recipe/:filter_idx', userController.readUserRecipeFilter);

module.exports = router;
