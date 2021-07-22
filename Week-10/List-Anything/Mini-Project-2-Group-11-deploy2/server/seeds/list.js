exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("list")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("list").insert([
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" },
      ]);
    });
};
