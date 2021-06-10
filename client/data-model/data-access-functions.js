const { select } = require("../../data/config-db");
const db = require("../../data/config-db");

function getRecipes() {
    return db('recipes')
}
function getByID(id) {
    return db("recipes").where("id", id).first()
}
function addRecipe(recipe){
    return db("recipes").insert(recipe)
}

function getShoppingList(recipe_id) {
    return db("ingredients_recipes as ir")
            .join("ingredients as i", "ir.ingredient_id", "i.id")
            .join("recipes as r", "ir.recipe_id", "r.id")
            .where("r.id", recipe_id)
            .select(
                "i.id",
                "r.id as recipe_id",
                "i.ingredient_name",
                "ir.quantity",
                "ir.unit"
            )
}

function getInstructions(recipe_id) {
    return db("steps as s")
            .join("recipes as r", "s.recipe_id", "r.id")
            .where("r.id", recipe_id)
            .select(
                
                "s.id",
                "r.id as recipe_id",
                "s.step_number",
                "s.instructions"
            )
            .orderBy("s.step_number")
}

function getRecipesByIngredient(ingredient_id) {
    return db("ingredients_recipes as ir")
            .where("i.id", ingredient_id)
            .join("ingredients as i", "ir.ingredient_id", "i.id")
            .leftJoin("recipes as r", "ir.recipe_id", "r.id")
            .select(
                "i.id as ingredient_id",
                "i.ingredient_name",
                "r.id",
                "r.recipe_name",

            )
}
function getIngredientByID(id){
    return db("ingredients").where("id", id).first()
}

module.exports = {
    getShoppingList,
    getInstructions,
    getRecipes,
    getByID,
    getRecipesByIngredient,
    getIngredientByID,
    addRecipe
}