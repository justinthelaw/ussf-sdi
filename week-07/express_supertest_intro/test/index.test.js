const app = require('../app')
const request = require('supertest')(app)
const books = require('../mock-data/books.json')

test("GET /", done => {
  request
    .get("/api/v1")
    .expect(200, JSON.stringify({ greeting: "Welcome to the Book Catalog API!" }))
    .end(done)
})