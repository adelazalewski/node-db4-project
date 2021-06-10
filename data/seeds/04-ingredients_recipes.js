
exports.seed =async function(knex) {
  await knex("ingredients_recipes").insert([
    {ingredient_id: 7, recipe_id: 2, quantity: 5, unit: "cups"},
    {ingredient_id: 8, recipe_id: 2, quantity: 2, unit: "big zucchinies"},
    {ingredient_id: 9, recipe_id: 2, quantity: 3, unit: "cups"},
    {ingredient_id: 10, recipe_id: 2, quantity: 12, unit: "lazania noodles"},
    {ingredient_id: 1, recipe_id: 3, quantity: 3, unit: "tbl spoons"},
    {ingredient_id: 2, recipe_id: 3, quantity: 1 + 1/2, unit: "cups"},
    {ingredient_id: 4, recipe_id: 3, quantity: 1/2, unit: "cup"},
    {ingredient_id: 7, recipe_id: 1, quantity: 5, unit: "cups"}
  ])
};
