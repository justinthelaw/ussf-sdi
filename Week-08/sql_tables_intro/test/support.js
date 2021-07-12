'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const spawn = require('child_process').spawn;
const connection = require('knex');

chai.should();
chai.use(chaiAsPromised);

global.chaiAsPromised = chaiAsPromised;
global.expect = chai.expect;
global.dbName = 'grocery_list_test';
global.dbURL = process.env.DATABASE_URL || 'postgres://localhost'

const dbConfig = {
  client: 'pg',
  connection: `${dbURL}/${dbName}`
};

/*
  Before each `it` function runs (each "example") execute these steps in this order:

  - if the database exists, drop it using the `dropdb` shell command
  - create a new database using the `createdb` shell command
  - create a global `knex` variable that is connected to that database
*/
beforeEach(() => {
  return resetDb().then(() => { 
    return global.knex = connection(dbConfig)
  })
  
});

// After each example, destroy the knex connection pool, so that future tests can reconnect
afterEach(async() => {
  await knex.destroy()
  // done()
})

// Make a temporary connection to default table, then drop & create dbName
function resetDb(cb) {
  let knexTmp = connection({
    client: 'pg',
    connection: `${dbURL}/postgres`
  })

  return knexTmp.raw(`DROP DATABASE IF EXISTS ${dbName};`)
    .then(result => knexTmp.raw(`CREATE DATABASE ${dbName};`))
    .then(result => knexTmp.destroy())
    .catch((err) => console.error)
}
