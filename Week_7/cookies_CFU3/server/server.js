const express = require('express');
const app = express();
const cookie = require('cookie-parser');
const cors = require('cors')

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json());
app.use(cookie());

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

app.post('/login', (req, res) => {
  console.log(req.cookies)
  res.status(200).end()
})

app.get('/cookies/name', (req, res) => {
  console.log(req.cookies)
  res.status(200).end()
})

app.get('/cookies/clear', (req, res) => {
  console.log(req.cookies)
  res.status(200).end()
})

const port = 5001
app.listen(port, () => {
  console.log(`> Cookies CFU3 server running on http://localhost:${port}`)
})