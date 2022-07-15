exports.up = function (knex, Promise) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.string("token");
      table.unique(["email", "password", "token"]);
    })
    .then(() => {
      return knex.schema.createTable("stores", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table
          .integer("user_id")
          .notNullable()
          .references("id")
          .inTable("users")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
    })
    .then(() => {
      return knex.schema.createTable("items", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("quantity").defaultTo("1");
        table.boolean("done").defaultTo("false");
        table
          .integer("store_id")
          .notNullable()
          .references("id")
          .inTable("stores")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table
          .integer("user_id")
          .notNullable()
          .references("id")
          .inTable("users")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("items")
    .dropTableIfExists("stores")
    .dropTableIfExists("users");
};
