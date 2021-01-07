
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", tbl => {
      tbl.increments("id")
      tbl.text("recipe_name").notNull().unique()
})
await knex.schema.createTable("ingredients", tbl => {
    tbl.increments("id")
    tbl.text("ingredient_name").notNull().unique()
})
await knex.schema.createTable("steps", tbl => {
    tbl.increments("id")
    tbl.integer("step_number").notNull()
    tbl.text("instructions").notNull()
    tbl.integer("recipe_id")
       .references("id")
       .inTable("recipes")
       .onDelete("CASCADE")
})
await knex.schema.createTable("ingredients_recipes", tbl => {
    tbl.integer("ingredient_id")
       .notNull()
       .references("id")
       .inTable("ingredients")
       .onDelete("SET NULL")
    tbl.integer("recipe_id")
        .notNull()
       .references("id")
       .inTable("recipes")
       .onDelete("SET NULL")
    tbl.float("quantity").notNull()
    tbl.text("unit").notNull()
    tbl.primary(["ingredient_id", "recipe_id"])
})

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("ingredients_recipes")
  await knex.schema.dropTableIfExists("steps")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
