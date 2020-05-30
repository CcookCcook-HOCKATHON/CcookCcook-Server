const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const userModel = require('../models/userModel');

exports.readUserRecipe = async (req,res)=>{
    try{
        const recipe = await userModel.readUserRecipe();

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SUCCESS, recipe));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
};

exports.readUserRecipeFilter = async (req,res)=>{
    const filter_idx = req.params.filter_idx
    try{
        const recipe = await userModel.readUserRecipeFilter(filter_idx);

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SUCCESS,recipe));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
};