// Update with your config settings.
const path = require('path');

const connection = process.env.DB_CONNECTION_STRING;

module.exports = {

  development: {
    client: 'pg',
    connection,
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/migrations'),
    },
    seeds: { directory: path.join(__dirname, '/seeds') },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
