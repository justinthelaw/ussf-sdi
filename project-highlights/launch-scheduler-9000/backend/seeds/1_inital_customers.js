
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        { name: 'SpaceX' },
        { name: 'United Launch Alliance (ULA)' },
        { name: 'NASA' }
      ]);
    });
};

// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('customers', table => {
//       table.increments('id').primary(); // adds an auto incrementing PK column
//       table.string('customer').notNullable();
//     }).then(() => {
//           return knex.schema.createTable('users', table => {
//               table.increments('id').primary(); // adds an auto incrementing PK column
//               table.string('name').notNullable();
//               table.string('email').notNullable();
//               table.string('password').notNullable();
//       })
//       }).then(() => {
//           return knex.schema.createTable('launchschedule', table => {
//               table.increments('id').primary(); // adds an auto incrementing PK column
//               table.integer('customer_id').notNullable().references('id').inTable('customers').onDelete('CASCADE');
//               table.string('vehicle').notNullable();
//               table.string('payload').notNullable();
//               table.string('date').notNullable();
//               table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
//               table.boolean('commanderApproval').defaultTo('false');
//           })
//       })
// };