const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(express.json());

app.get('/teachers', function (req, res) {
  knex
    .select('*')
    .from('teachers')
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
      console.log(err);
    }
    );
});

app.get('/students', function (req, res) {
  knex
    .select('*')
    .from('students')
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
      console.log(err);
    }
    );
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});