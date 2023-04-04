
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Julian', email: 'julian@awesomespace.com', password: '12345', commander: true },
        { name: 'Bryan', email: 'bryanleyva.mlk@gmail.com', password: 'password', commander: true },
        { name: 'Justin', email: 'justinthelaw@yahoo.com', password: 'galvanize', commander: true }
      ]);
    });
};

//return knex.schema.createTable('users', table => {
//               table.increments('id').primary(); // adds an auto incrementing PK column
//               table.string('name').notNullable();
//               table.string('email').notNullable();
//               table.string('password').notNullable();