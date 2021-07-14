// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_CONNECTION_STRING,
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds/development',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'db',
      user:     'postgres',
      password: 'docker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
