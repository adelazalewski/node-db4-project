
exports.seed =async function(knex) {
  await knex("recipes").insert([
    {recipe_name: "vegetarian lasania"},
    {recipe_name: "zucchini vegetarian lasania"},
    {recipe_name: "old fashio pancakes"}
  ])
};
