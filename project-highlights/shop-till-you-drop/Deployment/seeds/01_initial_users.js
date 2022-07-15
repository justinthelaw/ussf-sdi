exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          name: "Justin Law",
          email: "justinthelaw@yahoo.com",
          password:
            "$2b$12$yEg4Jg97h7gPxD0A5DYdnucUzx6Sojbuw.SqlB57uqrb.R7haHB1u",
          token: "",
        },
      ]);
    });
};
