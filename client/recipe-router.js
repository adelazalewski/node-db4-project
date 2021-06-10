const express = require("express");
const Recipes = require("./data-model/data-access-functions")
const router = express.Router()

router.get("/recipes", async (req, res, next) => {
    try{
        const recipes = await Recipes.getRecipes();
        res.json(recipes)
    }catch(err){
        next(err)
    }
    
})
router.get("/recipes/:id", validateID(), async (req, res, next)=>{
    res.json(req.recipe)
})
router.get("/recipes/:id/shoppingList",validateID(), async (req, res, next) => {
    try{
       const shopIngridients =  await Recipes.getShoppingList(req.params.id)
       res.json(shopIngridients)
    }catch(err){
        console.log(err)
        next(err)
    }
})
router.get("/recipes/:id/instructions",validateID(), async (req, res, next) => {
    try{
const steps = await Recipes.getInstructions(req.params.id)
res.json(steps)
    }catch(err){
        console.log(err)
        next(err)
    }
})
router.post("/recipes", async (req, res, next)=>{
    try{
const payload = {
    recipe_name: req.body.recipe_name

}
const [id] = await Recipes.addRecipe(payload)
const newRecipe = await Recipes.getByID(id)
res.status(201).json(newRecipe)
    }catch(err){
        console.log(err)
        next(err)
    }
})

//custom middleware
function validateID(){
    return async (req, res, next) => {
        try{
            const recipe = await Recipes.getByID(req.params.id)
            if(recipe){
                req.recipe = recipe
                next()
            }else{
                res.json({
                    message: "the recipe with the specified id does not exist"
                })
            }
        }catch(err){
next(err)
        }
    }
}


module.exports = router;