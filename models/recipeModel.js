const pool = require('../modules/pool');

exports.postLike = async (recipe_idx)=>{
    const query = `UPDATE CcookCcook.recipe SET recipe_like = recipe_like +1 WHERE recipe_idx = ${recipe_idx};`;
    try{
        await pool.queryParam(query);
    } catch(err){
        console.log('ERROR : ', err);
        throw err;
    }
};

exports.readRecipe = async (recipe_idx)=>{
    const query = `SELECT recipe_title,recipe_like,recipe_category FROM CcookCcook.recipe WHERE recipe_idx=${recipe_idx};`;
    try{
        const result = await pool.queryParam(query);
        return result;
    } catch(err){
        console.log('ERROR : ', err);
        throw err;
    }
};

exports.readImgContent = async (recipe_idx)=>{
    const query = `SELECT recipe_img, recipe_des FROM CcookCcook.content WHERE recipe_idx=${recipe_idx};`;
    try{
        const result = await pool.queryParam(query);
        return result;
    } catch(err){
        console.log('ERROR : ', err);
        throw err;
    }
};