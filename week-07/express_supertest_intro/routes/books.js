var express = require('express');
var router = express.Router();
var books = require('../mock-data/books.json');
var fs = require('fs')

router.get('/', function (req, res, next) {
  res.json(books).end()
});

router.get('/:bookId', async (req, res) => {
  let input = req.params.bookId
  if (!parseInt(input)) {
    res.status(400).end()
  }
  else if (books[input - 1]) {
    res.status(200).json(books[input - 1]).end()
  } else {
    res.status(404).end()
  }
})

router.post('/', (req, res) => {
  req.body["id"] = books.length + 1
  let data = [...books, req.body]
  console.log(req.body["id"])
  fs.writeFile("./mock-data/books.json", JSON.stringify(data), (err) => {
    if (err) return console.log(err)
  })

  res.status(200).send(req.body).end()

})

module.exports = router;
