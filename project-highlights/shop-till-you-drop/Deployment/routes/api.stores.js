const express = require("express");
const router = express.Router();
const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);

router.get("/:userId", async (req, res) => {
  await knex
    .select("*")
    .from("stores")
    .where({ user_id: req.params.userId })
    .orderBy("id")
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: `Encountered ${err}` }));
});

router.get("/", async (req, res) => {
  await knex
    .select("*")
    .from("stores")
    .orderBy("id")
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: `Encountered ${err}` }));
});

module.exports = router;
