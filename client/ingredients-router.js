const express = require("express");
const Ingredients = require("./data-model/data-access-functions");
const router = express.Router();

router.get("/ingredients/:id", validateID(),async (req, res, next) =>{
    try{
res.json(req.ingredient)
    }catch(err){
        console.log(err)
        next(err)
    }
})
router.get("/ingredients/:id/recipes", validateID(), async (req, res, next) => {
    try{
const recipesThatUseOneIngredient = await Ingredients.getRecipesByIngredient(req.params.id)
res.json(recipesThatUseOneIngredient)
    }catch(err){
        console.log(err)
        next(err)
    }
})

//custom middleware
function validateID(){
    return async (req, res, next) => {
        try{
            const ingredient = await Ingredients.getIngredientByID(req.params.id)
            if(ingredient){
                req.ingredient = ingredient
                next()
            }else{
                res.json({
                    message: "the ingredient does not exists"
                })
            }
        }catch(err){
            console.log(err)
            next(err)
        }
    }
}

module.exports = router;
