exports.up = function (knex) {
  return knex.schema.createTable("list", (table) => {
    table.increments("id"); // adds an auto incrementing PK column
    table.string("text").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("list");
};
