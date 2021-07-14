
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('wishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('wishes').insert([
        {name: 'Superman', wish: 'With great power comes great chicks.'},
        {name: 'Anon', wish: ''}
      ]);
    });
};
