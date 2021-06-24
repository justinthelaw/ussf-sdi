var express = require('express');
var router = express.Router();
var authors = require('../mock-data/authors.json')

router.get('/', function (req, res, next) {
  res.json(authors).end()
});

router.get('/:authorId', async (req, res) => {
  let input = req.params.authorId
  if (!parseInt(input)) {
    res.status(400).end()
  }
  else if (authors[input - 1]) {
    res.status(200).json(authors[input - 1]).end()
  } else {
    res.status(404).end()
  }
})


module.exports = router;
