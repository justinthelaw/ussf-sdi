const express = require("express");
const router = express.Router();
const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);

router.post("/post", async (req, res) => {
  await knex("stores")
    .insert({
      user_id: req.body.userId,
      name: req.body.name,
    })
    .then(res.status(200).end())
    .catch((err) => res.status(404).json({ message: `Encountered ${err}` }));
});

router.delete("/delete", async (req, res) => {
  await knex("stores")
    .del()
    .where({
      id: req.body.storeId,
    })
    .then(res.status(200).end())
    .catch((err) => res.status(404).json({ message: `Encountered ${err}` }));
});

router.patch("/patch", async (req, res) => {
  await knex("stores")
    .where({
      id: req.body.storeId,
    })
    .update({
      name: req.body.name,
    })
    .then(res.status(200).end())
    .catch((err) => res.status(404).json({ message: `Encountered ${err}` }));
});

module.exports = router;
