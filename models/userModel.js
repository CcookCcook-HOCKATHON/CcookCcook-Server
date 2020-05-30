const pool = require('../modules/pool');

exports.readUserRecipe = async ()=>{
    const query = `SELECT recipe_title, recipe_like, recipe_img 
    FROM recipe INNER JOIN CcookCcook.content USING(recipe_idx) 
    WHERE recipe_main_img = 1 and user_idx = 2
    ORDER BY recipe_like ASC;
`;
    try{
        const result = await pool.queryParam(query);
        return result;
    } catch(err){
        console.log('ERROR : ', err);
        throw err;
    }
};

exports.readUserRecipeFilter = async (filter_idx)=>{
    const query = `SELECT recipe_title, recipe_like, recipe_img 
    FROM recipe INNER JOIN CcookCcook.content USING(recipe_idx) 
    WHERE recipe_main_img = 1 and user_idx = 2 and recipe_category= ${filter_idx}
    ORDER BY recipe_like ASC;
    `;
    try{
        const result = await pool.queryParam(query);
        return result;
    } catch(err){
        console.log('ERROR : ', err);
        throw err;
    }
};