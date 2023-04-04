exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("stores")
    .del()
    .then(function () {
      return knex("stores").insert([
        {
          name: "Base Exchange",
          user_id: 1,
        },
        {
          name: "Commissary",
          user_id: 1,
        },
      ]);
    });
};
