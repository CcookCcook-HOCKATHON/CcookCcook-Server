const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const userModel = require('../models/userModel');

exports.readUserLike = async (req,res)=>{
    try{
        const recipe = await userModel.readUserLike();

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SUCCESS, recipe));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
};