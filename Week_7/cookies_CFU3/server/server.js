const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors')

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json());
app.use(cookieParser());

let cookieJar = [];

app.get('/', (req, res) => {
  res.status(200).send(cookieJar)
})

app.post('/login', (req, res) => {
  cookieJar.push(req.cookies)
  console.log(cookieJar)
  res.status(200).send('Cookies set in Browser').end()
})

app.get('/login', (req, res) => {
  res.cookie('name', req.query.name).send('Cookies set in Express').end()
})

app.get('/cookies/name', (req, res) => {
  res.status(200).send(cookieJar).end()
}
)

app.get('/cookies/clear', (req, res) => {
  cookieJar = []
  res.status(200).clearCookie('name').end()
})

const port = 5001
app.listen(port, () => {
  console.log(`> Cookies CFU3 server running on http://localhost:${port}`)
})