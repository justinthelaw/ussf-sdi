
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { name: 'Cook', user_id: '1' },
        { name: 'Clean', user_id: '2' },
        { name: 'Take out trash', user_id: '1' },
        { name: 'Wash dishes', user_id: '2' }
      ]);
    });
};