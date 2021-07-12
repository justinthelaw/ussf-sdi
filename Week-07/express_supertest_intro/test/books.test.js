const app = require('../app')
const request = require('supertest')(app)
const books = require('../mock-data/books.json')

test("GET /api/v1/books", done => {
  request.get('/api/v1/books')
    .expect(200)
    .end(function (err, res) {
      expect(res.body.length).toEqual(books.length)
      done()
    })
})

it('GETs the expected data from books endpoint', async done => {
  const res = await request.get('/api/v1/books')
  let expected = (res.body[0]["id"])
  expect(expected).toEqual(1)
  done()
})

test("GET /api/v1/books/:bookId", done => {
  request.get('/api/v1/books/2')
    .expect(200)
    .end(function (err, res) {
      expect(res.body["id"]).toEqual(2)
      done()
    })
})

test("GET /api/v1/books/:bookId", done => {
  request.get('/api/v1/books/1500')
    .end(function (err, res) {
      expect(res.status).toEqual(404)
      done()
    })
})

test("GET /api/v1/books/:bookId", done => {
  request.get('/api/v1/books/fakeId')
    .end(function (err, res) {
      expect(res.status).toEqual(400)
      done()
    })
})

test("POST a new book", done => {
  let newBook = { "id": null, "title": "testBook", "author": "testAuthor", "release_year": 2021 }
  request.post('/api/v1/books')
    .send(newBook)
    .end(function (err, res) {
      expect(res.status).toEqual(200)
      console.log(res.body["id"])
      done()
    })
})
