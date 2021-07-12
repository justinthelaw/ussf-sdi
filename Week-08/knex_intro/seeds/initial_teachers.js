
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        { teacher_id: 1, first_name: 'Gordon', last_name: 'Ramsey', age: 54, tenured: true, birthday: '1966-11-08' },
        { teacher_id: 2, first_name: 'Guy', last_name: 'Fieri', age: 53, tenured: false, birthday: '1968-01-22' },
        { teacher_id: 3, first_name: 'Giada', last_name: 'Laurentiis', age: 50, tenured: true, birthday: '1970-08-22' }
      ]);
    });
};

// table.increments('teacher_id');
// table.string('first_name').notNullable();
// table.string('last_name').notNullable();
// table.integer('age');
// table.boolean('tenured');
// table.date('birthday');
// table.timestamps(true, true);
