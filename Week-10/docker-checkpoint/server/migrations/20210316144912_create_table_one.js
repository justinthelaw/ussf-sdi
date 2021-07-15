exports.up = function (knex) {
  return knex.schema.createTable('table_one', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('color');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('table_one');
};
