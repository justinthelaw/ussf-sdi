// Update with your config settings.
require("dotenv").config();

const { CLIENT, DATABASE, PG_USER, POSTGRES_PASSWORD, HOST, PG_PORT } =
  process.env;

const dbConnection =
  process.env.DATABASE_URL ||
  `postgres://${PG_USER}:${POSTGRES_PASSWORD}@${HOST}:${PG_PORT}/${DATABASE}`;

const client = CLIENT ? `${CLIENT}` : "pg";

module.exports = {
  development: {
    client: client,
    connection: dbConnection,
    ssl: {
      rejectUnauthorized: false,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: client,
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
