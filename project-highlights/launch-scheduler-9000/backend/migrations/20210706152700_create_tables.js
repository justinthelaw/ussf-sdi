
exports.up = function (knex, Promise) {
    return knex.schema.createTable('customers', table => {
        table.increments('id').primary(); // adds an auto incrementing PK column
        table.string('name').notNullable();
    }).then(() => {
        return knex.schema.createTable('users', table => {
            table.increments('id').primary(); // adds an auto incrementing PK column
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.boolean('commander').notNullable();
        })
    }).then(() => {
        return knex.schema.createTable('launchschedule', table => {
            table.increments('id').primary(); // adds an auto incrementing PK column
            table.integer('customer_id').notNullable().references('id').inTable('customers');
            table.string('vehicle').notNullable();
            table.string('payload').notNullable();
            table.string('launch_date').notNullable();
            table.integer('user_id').notNullable().references('id').inTable('users');
            table.string('request_date').defaultTo(new Date().toGMTString());
            table.boolean('commander_approval').defaultTo('false');
            table.string('approval_date').defaultTo('Not Approved')
            table.string('scrub_reason').defaultTo('N/A');
        })
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('customers')
        .dropTableIfExists('users')
        .dropTableIfExists('launchschedule')
};