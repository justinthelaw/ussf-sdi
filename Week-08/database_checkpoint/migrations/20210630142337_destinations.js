
exports.up = function (knex) {
  return knex.schema.createTable('destinations', table => {
    table.increments('id');
    table.string('name');
    table.integer('average_temp');
    table.integer('cost_of_flight');
    table.boolean('has_beach');
    table.boolean('has_mountains');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('destinations')
};
