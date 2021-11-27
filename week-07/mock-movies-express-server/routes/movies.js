var express = require('express');
var router = express.Router();
const movies = require('../data/movies.json')
var fs = require('fs');
const { moveCursor } = require('readline');

/* GET users listing. */
router.get('/', function (req, res, next) {
  // console.log(req.query.title)
  if (!req.query.title) { res.json(movies).end() }
  else {
    const title = movies.filter((movie) => movie.title === req.query.title)
    res.json(title[0]).end()
  }
});

// Nav to localhost:3000/movies/{id} and the movie with that id will be displayed
router.get('/:id', function (req, res, next) {
  if (!parseInt(req.params.id)) {
    res.status(400).end()
  } else {
    const movie = movies.filter((movie) => movie.id === Number(req.params.id))
    if (movie.length === 0) {
      res.status(404).end()
    }
    // console.log("movie", movie)
    res.json(movie[0]).end()
  }
});

// Create a movie object for the body, nav to localhost:3000/movies and POST to add object
router.post('/', (req, res) => {
  req.body['id'] = movies.length + 1
  // console.log(req.body)
  //  let content = movies.push(req.body)
  let content = [...movies, req.body]
  fs.writeFile('./data/movies.json', JSON.stringify(content), (err) => {
    if (err) console.log(err)
  })
  res.send(content).end()
})

router.delete('/:id', (req, res) => {
  if (!parseInt(req.params.id)) {
    res.status(400).end()
  } else {
    const deletedMovie = movies.filter((movie) => movie.id === parseInt(req.params.id))
    if (deletedMovie.length === 0) {
      res.status(404).end()
    }
    // console.log(deletedMovie)
    const movieIndex = movies.findIndex((movie) => movie.id === parseInt(req.params.id))
    // console.log(movieIndex)
    movies.splice(movieIndex, 1)
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
      if (err) console.log(err)
    })
    res.end(JSON.stringify(movies, null, 1))
  }
})

module.exports = router;
