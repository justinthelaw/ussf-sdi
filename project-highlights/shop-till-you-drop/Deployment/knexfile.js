const path = require("path");
require("dotenv").config();

const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, HOST_DEV, PG_PORT } =
  process.env;

const dbConnection =
  process.env.DATABASE_URL ||
  `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${HOST_DEV}:${PG_PORT}/${POSTGRES_DB}`;

module.exports = {
  development: {
    client: "pg",
    connection: dbConnection,
    ssl: {
      rejectUnauthorized: false,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "/migrations"),
    },
    seeds: { directory: path.join(__dirname, "/seeds") },
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
    client: "pg",
    connection: dbConnection,
    ssl: true,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
