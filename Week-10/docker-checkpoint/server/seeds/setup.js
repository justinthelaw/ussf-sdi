exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_one').del()
    .then(() => knex('table_one').insert([
      { id: 1, name: 'James', color: 'blue' },
      { id: 2, name: 'Katie', color: 'yellow' },
      { id: 3, name: 'Brandon', color: 'red' },
    ]));
};
