const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const recipeModel = require('../models/recipeModel');

exports.postLike = async (req,res)=>{
    const recipe_idx = req.params.recipe_idx;
    try{
        await recipeModel.postLike(recipe_idx);

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SUCCESS, ));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
};