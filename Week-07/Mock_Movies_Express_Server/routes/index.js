var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World!');
});

router.get('/setCookie', (req, res) => { //?firstName=XX&lastName=XX
  res.cookie("name",`${req.query.firstName} ${req.query.lastName}`)
     .end(`name: ${req.query.firstName} ${req.query.lastName}`)
})

router.get('/readCookie', (req, res) => {
  res.end(`Howdy, ${req.cookies.name}`)
})

module.exports = router;
