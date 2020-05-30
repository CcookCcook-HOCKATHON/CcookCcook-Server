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