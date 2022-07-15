const express = require("express");
const router = express.Router();
const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);

router.post("/post", async (req, res) => {
  await knex("items")
    .insert({
      user_id: req.body.userId,
      store_id: req.body.storeId,
      name: req.body.name,
      quantity: req.body.quantity || 1,
    })
    .then(res.status(200).end())
    .catch((err) => res.status(404).json({ message: `Encountered ${err}` }));
});

router.delete("/delete", async (req, res) => {
  await knex("items")
    .del()
    .where({
      id: req.body.itemId,
    })
    .then(res.status(200).end())
    .catch((err) => res.status(404).json({ message: `Encountered ${err}` }));
});

router.patch("/patch", async (req, res) => {
  await knex("items")
    .where({
      id: req.body.itemId,
    })
    .update({
      name: req.body.name,
      quantity: req.body.quantity,
      done: req.body.done,
    })
    .then(res.status(200).end())
    .catch((err) => res.status(404).json({ message: `Encountered ${err}` }));
});

module.exports = router;
