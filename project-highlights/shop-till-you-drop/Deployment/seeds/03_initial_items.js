exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        { name: "Candle", quantity: "2", store_id: 1, user_id: 1, done: false },
        { name: "Swiffer Duster", store_id: 1, user_id: 1, done: true },
        {
          name: "Salmon",
          quantity: "1 lb",
          store_id: 2,
          user_id: 1,
          done: true,
        },
        { name: "Pizza", quantity: "2", store_id: 2, user_id: 1, done: true },
      ]);
    });
};
