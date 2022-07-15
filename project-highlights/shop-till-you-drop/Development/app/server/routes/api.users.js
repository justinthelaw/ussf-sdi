const express = require("express");
const router = express.Router();
const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);

router.get("/", async (req, res) => {
  await knex
    .select("name")
    .from("users")
    .orderBy("id")
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: `Encountered ${err}` }));
});

module.exports = router;
