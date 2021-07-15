const express = require('express');
const cors = require('cors');

const app = express();
const port = 2001;

const knex = require('knex');

const environment = 'development';
const config = require('./knexfile.js');

const environmentConfig = config[environment];
const db = knex(environmentConfig);

app.use(cors());

app.get('/', (req, res) => {
  const successMessage = 'Welcome to your Dockerized Express/React container!';
  res.json(successMessage);
});

app.get('/test', (req, res) => {
  db.select('*').from('table_one')
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
