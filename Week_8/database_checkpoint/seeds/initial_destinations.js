
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('destinations').del()
    .then(function () {
      // Inserts seed entries
      return knex('destinations').insert([
        {
          name: 'Thailand',
          average_temp: 82,
          cost_of_flight: 765,
          has_beach: true,
          has_mountains: true
        },
        {
          name: 'Minnesota',
          average_temp: 41,
          cost_of_flight: 235,
          has_beach: false,
          has_mountains: false
        },
        {
          name: 'New Zealand',
          average_temp: 66,
          cost_of_flight: 433,
          has_beach: true,
          has_mountains: true
        },
        {
          name: 'England',
          average_temp: 45,
          cost_of_flight: 290,
          has_beach: false,
          has_mountains: false
        },
        {
          name: 'Tristan da Cunha',
          average_temp: 59,
          cost_of_flight: 1304,
          has_beach: true,
          has_mountains: true,
        }
      ]);
    });
};
