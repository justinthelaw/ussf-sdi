
exports.up = function (knex) {
  return knex.schema.createTable('airlines', table => {
    table.increments('id');
    table.string('name');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('airlines')
};
