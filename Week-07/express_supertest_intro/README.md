# Testing Express

## Setup

```
npm install
npx nodemon
```

When you open the app, you should see JSON representing the two endpoints you are test driving.


## Test-Drive Some Code

### Read data from a single book

Test drive the `books` endpoint `/api/v1/books/{bookId}` to respond with an individual book whose `id` from `mock-data/books.json` is in the URL. If the `bookId` parameter in the URL does not match with any `id` in the data, `books.json`, return a status code of 404.
<br>

| URL | Method |
| ---|---|
|`/api/v1/books/{bookId}`| GET|

| Name | Description |
| ---|---|
| bookId | Id of book to return |
<br>

Example Response:
| Code | Description |
| ---|---|
| 200 |     `[` |
|      |      `{` |
|      |        `"title": "You Are Not So Smart", `|
|      |        `"author": "David McRaney", `|
|      |        `"release_year": 2011, `|
|      |      `} `|
|      |   ` ] `|
| 404 | Book ID not found |
| 400 | Invalid ID supplied|
| | |
   
<br>
   

### Read all authors

Test drive the request handler for `GET` requests to the `authors` endpoint `/api/v1/authors` to return the the array of authors in `mock-data/authors.json`. Also, test drive the handling of `404` and `400` status codes.

| URL | Method |
| ---|---|
|`/api/v1/authors`| GET|

Example Response:
<br>

| Code | Description |
| ---|---|
| 200 |     `[` |
|      |      `{` |
|      |        `"author": "Ernest Hemingway", `|
|      |      `}, `|
|      |      `{` |
|      |        `"author": "Gertrude Stein", `|
|      |      `}, `|
|      |      `{` |
|      |        `"author": "Flava Flav", `|
|      |      `} `|
|      |   ` ] `|
| 404 | Author ID not found |
| 400 | Invalid ID supplied|

   
<br>


**Testing Notes**

You can use strict equality inside the `res.end` function, like so:

```js
  .end(function (err, res) {
    expect(res.body).toEqual({
      // ... your full response here
    })
    done();
  })
```
 ### Create a new book resource

URL: `POST /api/v1/books`

| URL | Method |
| ---|---|
|`/api/v1/books`| POST |



| Code | Description |
| ---|---|
| 200 |     `[` |
|      |      `{` |
|      |        `"id": "7", `|
|      |      `}, `|
|      |      `{` |
|      |        `"title": "Where The Wild Things Are", `|
|      |      `}, `|
|      |      `{` |
|      |        `"author": "Maurice Sendak", `|
|      |      `}, `|
|      |      `{` |
|      |        `"release_year": "1963", `|
|      |      `} `|
|      |   ` ] `|
 <br>

**Testing Notes**

You'll have to send JSON data from Supertest, like so:

```js
request
  .post("/api/v1/books")
  .send({some: "data"})
  .expect(200)
  .expect(function(req){
    // write some assertions
    done()
  });
```

### Update a book resource

URL: `PATCH /api/v1/books/1`

When a book is updated, return a response like this:

```json
[
  {
    "id": 54,
    "title": "The Title of the Book",
    "author": "Writa Sblock",
    "release_year": 1999
  }
]
```


### Delete a book resource

URL: `DELETE /api/v1/books/1`

When a book is deleted, respond with a status code of 200.

**Testing Notes**

How will you test that the book was in fact deleted?

One technique is to try to find that book by its `id` after running the test.

