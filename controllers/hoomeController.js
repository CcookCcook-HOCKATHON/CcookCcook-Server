const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const homeModel = require('../models/homeModel');

exports.readRank = async (req,res)=>{
    try{
        const recipe = await homeModel.readRank();

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SUCCESS, recipe));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
};

exports.readFilter = async (req,res)=>{
    const filter_idx = req.params.filter_idx;
    try{
        const recipe = await homeModel.readFilter(filter_idx);

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SUCCESS, recipe));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
};