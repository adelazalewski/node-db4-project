
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {ingredient_name: "butter"},
    {ingredient_name: "all purpouse flour"},
    {ingredient_name: "corn flour"},
    {ingredient_name: "chocolate chip"},
    {ingredient_name: "salt"},
    {ingredient_name: "baking powder"},
    {ingredient_name: "marinara sauce"},
    {ingredient_name: "zucchini"},
    {ingredient_name: "mozzarela"},
    {ingredient_name: "lazania nuddles"},
  ])
};
