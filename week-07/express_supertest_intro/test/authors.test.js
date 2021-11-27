const app = require('../app')
const request = require('supertest')(app)
const authors = require('../mock-data/authors.json')

test('GETs array of authors', done => {
  request.get('/api/v1/authors')
    .expect(200)
    .end((err, res) => {
      expect(res.body.length > 0).toEqual(true)
      done()
    })
})

test('GETs author by id', done => {
  request.get("/api/v1/authors/3")
    .expect(200)
    .end((err, res) => {
      expect(res.body["author"]).toEqual("J.D. Vance")
      done()
    })
})

test("GET /api/v1/authors/:authorId", done => {
  request.get('/api/v1/authors/1500')
    .end(function (err, res) {
      expect(res.status).toEqual(404)
      done()
    })
})

test("GET /api/v1/authors/:authorId", done => {
  request.get('/api/v1/authors/fakeId')
    .end(function (err, res) {
      expect(res.status).toEqual(400)
      done()
    })
})