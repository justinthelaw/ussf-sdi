
exports.up = function(knex) {
    return knex.schema.createTable('wishes', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('name');
        table.string('wish');
        table.timestamps(true, true); // adds created_at and updated_at
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('wishes');
};
