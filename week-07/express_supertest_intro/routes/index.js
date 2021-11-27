var express = require('express');
var router = express.Router();
var url = require('url');

router.get('/', function (req, res, next) {
  res.json({
    greeting: "Welcome to the Book Catalog API!"
  })
});

module.exports = router;
