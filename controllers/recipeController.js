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

exports.readRecipe = async (req,res)=>{
    const recipe_idx = req.params.recipe_idx;
    try{
        const recipe = await recipeModel.readRecipe(recipe_idx);
        const detailImg = await recipeModel.readImgContent(recipe_idx);
        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SUCCESS, {recipe , detailImg}));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
};

exports.postRecipe = async (req,res)=>{
    const { recipe_title, recipe_category, detail } = req.body;
    try{
        console.log(recipe_title);
        console.log(recipe_category);
        const recipe_idx = await recipeModel.postRecipe(recipe_title, recipe_category);
        detail.forEach((element, index) => {
            let img = element.recipe_img;
            let content = element.recipe_des;
            // 메인 이미지
            if (!index) recipeModel.postImgContent(recipe_idx, img, content, 1);
            // 서브이미지
            else recipeModel.postImgContent(recipe_idx, img, content, 0);
        });




        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.SUCCESS, ));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
};