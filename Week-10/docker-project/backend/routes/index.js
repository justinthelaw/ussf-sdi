var express = require('express');
var router = express.Router();
const cors = require('cors')
const knex = require('knex')(require('../knexfile.js')['development']);

router.use(express.json())
router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wishes', (_, res) => {
  knex.select('*').from('wishes')
    .then(data => res.status(200).json(data))
})

router.get('/random', (_, res) => {
    knex.select('*')
        .from('wishes')
        .orderByRaw('RANDOM()')
        .limit(1)
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'The wish denied you!'
            }))
})

router.post('/wish', (req, res) => {
  knex('wishes').insert({name: req.body.name, wish: req.body.wish})
    .returning('id')
    .then(res.status(200).send())
    .catch(error => {
      console.log(error);
      res.status(404).end()
    })
})

module.exports = router;
