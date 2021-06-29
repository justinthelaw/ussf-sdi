//YYYYMMDDHHMMSS_create_teachers.js

exports.up = function (knex) {
  return knex.schema.createTable('teachers', table => {
    table.increments('teacher_id');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.integer('age');
    table.boolean('tenured');
    table.date('birthday');
    table.timestamps(true, true);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('teachers');
};
