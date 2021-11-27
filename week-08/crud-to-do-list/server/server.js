const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;
const knex = require('knex')(require('../knexfile.js')['development']);

app.use(express.json());
app.use(cors());

/*
GETS HERE
*/

app.get('/echo', function (req, res) {
  res.status(200).end('Hello World!')
});

app.get('/users', function (req, res) {
  knex.select('*').from('users')
    .then(data => res.status(200).json(data))
    .then(console.log('Success GET users'))
    .catch(err => {
      res.status(404).json({ message: 'The data you are looking for could not be found. Please try again' })
      console.log(err)
    })
})

app.get('/users/:id/todos', function (req, res) {
  knex.select('*').from('todos').where('user_id', req.params.id)
    .then(data => res.status(200).json(data))
    .then(console.log('Successful GET todos'))
    .catch(err => {
      res.status(404).json({ message: 'The data you are looking for could not be found. Please try again' })
      console.log(err)
    })
})


/*
POSTS HERE
*/

app.post('/users', function (req, res) {
  knex('users').insert({ name: req.body.name })
    .then(data => res.status(201).send(`User: ${req.body.name} Created`))
    .then(console.log('Successful POST users'))
    .catch(err => {
      res.status(404).json({ message: 'User could not be created. Please try again' })
      console.log(err)
    })
})

app.post('/todos', function (req, res) {
  knex('todos').insert({
    name: req.body.name,
    user_id: req.body.user_id
  })
    .then(data => res.status(201).send(`To-do: ${req.body.name} with id ${req.body.user_id} Created`))
    .then(console.log('Successful POST todos'))
    .catch(err => {
      res.status(404).json({ message: 'To-do could not be created. Please try again' })
      console.log(err)
    })
})

/*
PATCHES HERE
*/

app.patch('/todos', function (req, res) {
  knex('todos').where({ id: req.body.id }).update({ done: req.body.done })
    .then(data => res.status(201).send(`To-do: ${req.body.name} set to ${req.body.done}`))
    .then(console.log('Successful PATCH todos'))
    .catch(err => {
      res.status(404).json({ message: 'To-do could not be created. Please try again' })
      console.log(err)
    })
})

/*
DELETES HERE
*/

app.delete('/todos', function (req, res) {
  knex('todos').where({ id: req.body.id }).delete()
    .then(data => res.status(201).send(`To-do: ${req.body.name} deleted`))
    .then(console.log('Successful DELETE todos'))
    .catch(err => {
      res.status(404).json({ message: 'To-do could not be deleted. Please try again' })
      console.log(err)
    })
})

app.delete('/users/todos', function (req, res) {
  knex('todos').where({ user_id: req.body.id }).delete()
    .then(data => res.status(201).send(`To-do: ${req.body.name} deleted`))
    .then(console.log('Successful DELETE all user\'s todos'))
    .catch(err => {
      res.status(404).json({ message: 'To-dos could not be deleted. Please try again' })
      console.log(err)
    })
})

app.delete('/users', function (req, res) {
  knex('users').where({ id: req.body.id }).delete()
    .then(data => res.status(201).send(`To-do: ${req.body.name} deleted`))
    .then(console.log('Successful DELETE users'))
    .catch(err => {
      res.status(404).json({ message: 'User could not be deleted. Please try again' })
      console.log(err)
    })
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});