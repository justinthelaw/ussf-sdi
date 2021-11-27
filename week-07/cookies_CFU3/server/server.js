const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors')

app.use(cors({ origin: 'http://localhost:5000', credentials: true }))
app.use(express.json());
app.use(cookieParser());

let cookieJar = [];

app.get('/', (req, res) => {
  res.status(200).send(cookieJar)
})

app.post('/login', (req, res) => {
  cookieJar.push(req.cookies)
  console.log(cookieJar)
  res.status(200).end(JSON.stringify('Cookies set in Browser'))
})

app.get('/login', (req, res) => {
  cookieJar.push({ 'name': req.query.name })
  console.log(cookieJar)
  res.cookie('name', req.query.name).end(JSON.stringify('Cookies set in Express'))
})

app.get('/cookies/name', (req, res) => {
  console.log(cookieJar)
  res.status(200).send(cookieJar).end()
}
)

app.get('/cookies/clear', (req, res) => {
  cookieJar = []
  console.log(cookieJar)
  res.status(200).clearCookie('name').end(JSON.stringify('Cookies cleared'))
})

const port = 5001
app.listen(port, () => {
  console.log(`> Cookies CFU3 server running on http://localhost:${port}`)
})