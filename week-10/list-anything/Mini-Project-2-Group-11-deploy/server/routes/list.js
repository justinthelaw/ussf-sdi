var express = require("express");
var router = express.Router();
var cors = require("cors");
var knex = require("knex")(require("../knexfile.js")["development"]);

router.use(cors());
router.use(express.json());

/* GET users listing. */
router.get("/", function (req, res) {
  async function getList() {
    return await knex
      .select("*")
      .from("list")
      .then((data) => data)
      .catch((error) => {
        console.log(error);
        res.status(404).end();
      });
  }

  getList().then((data) => res.status(200).json(data));
});

router.post("/", (req, res) => {
  async function addToList() {
    return await knex("list")
      .insert({ text: req.body.text })
      .catch((error) => {
        console.log(error);
        res.status(404).end();
      });
  }

  addToList().then(() => res.status(200).send("POSTED"));
});

router.patch("/", (req, res) => {
  async function updateList() {
    return await knex("list")
      .where("id", req.body.id)
      .update("text", req.body.text)
      .catch((error) => {
        console.log(error);
        res.status(404).end();
      });
  }

  updateList().then(() => res.status(200).send("PATCHED"));
});

router.delete("/", function (req, res) {
  async function deleteFromList() {
    let list = await knex("list")
      .where("id", req.body.id)
      .del()
      .catch((error) => {
        console.log(error);
        res.status(404).end();
      });
  }

  deleteFromList().then(() => res.status(200).send("DELETED"));
});

module.exports = router;
