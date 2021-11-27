
exports.up = function (knex, Promise) {
  return knex.schema.createTable('todos', table => {
    table.increments('id').notNullable().primary();
    table.string('name').notNullable();
    table.boolean('done').notNullable().defaultTo('false');
    table.integer('user_id').notNullable()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('todos')
};

// table
//       .uuid("card_set_id")
//       .notNullable()
//       .references("id")
//       .inTable("card_sets")
//       .onDelete("CASCADE");

// table.string('state').notNullable().defaultTo('pending')