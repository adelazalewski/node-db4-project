
exports.seed = async function(knex) {
  await knex("ingredients_recipes").truncate()
  await knex("steps").truncate()
  await knex("ingredients").truncate()
  await knex("recipes").truncate()
};