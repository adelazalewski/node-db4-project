
exports.seed =async function(knex) {
  await knex("steps").insert([
    {step_number: 1, instructions: "pour 1 cup marinara on the bottom of the pan", recipe_id: 1},
    {step_number: 2, instructions: "align 3 lazania noodles then add 1/2 cup marinara sauce", recipe_id: 1},
    {step_number: 3, instructions: "add one layer of zucchini", recipe_id: 2},
    {step_number: 4, instructions: "now add one layer shreded mozzarela and keep going with step 3 and 4 until all ingredients are used up", recipe_id: 2}
  ])
};
