'use strict';

const fs = require('fs');

describe("A proficient SQL developer", () => {
  it("should be able to create a table successfully", (done) => {
    const sql = fs.readFileSync('src/01-create-table.sql', 'utf8');
    const showTableSql = `select column_name, data_type, is_nullable
      from information_schema.columns
      where table_name='list';`

    return knex.raw(sql)
      .then(() => knex.raw(showTableSql))
      .then(result => result.rows)
      .should.become([
        {
          "column_name": "id",
          "data_type": "integer",
          "is_nullable": "NO",
        }, {
          "column_name": "item",
          "data_type": "character varying",
          "is_nullable": "YES",
        }, {
          "column_name": "qty",
          "data_type": "integer",
          "is_nullable": "YES",
        }, {
          "column_name": "units",
          "data_type": "character varying",
          "is_nullable": "YES",
        },
      ], done())
  });

  it("should be able to insert rows into a table", (done) => {
    const createTableSql = fs.readFileSync('src/01-create-table.sql', 'utf8');
    const insertSql = fs.readFileSync('src/02-insert-rows.sql', 'utf8');

    return knex.raw(createTableSql)
      .then(() => knex.raw(insertSql))
      .then(() => knex('list'))
      .should.become([
        { id: 1, item: 'milk', qty: 2, units: 'gallons' },
        { id: 2, item: 'eggs', qty: 1, units: 'dozen' },
        { id: 3, item: 'butter', qty: 12, units: 'sticks' },
        { id: 4, item: 'flour', qty: 1, units: 'pound' },
        { id: 5, item: 'sour cream', qty: 1, units: 'dollop' },
        { id: 6, item: 'apples', qty: 2, units: 'bushels' },
        { id: 7, item: 'sugar', qty: 2, units: 'pounds' },
        { id: 8, item: 'oj', qty: 3, units: 'gallons' },
      ], done())
  });

  it("should be able to find data in a table by keyword", (done) => {
    const createTableSql = fs.readFileSync('src/01-create-table.sql', 'utf8');
    const insertSql = fs.readFileSync('src/02-insert-rows.sql', 'utf8');
    const findItemsSql = fs.readFileSync('src/03-find-items.sql', 'utf8');

    return knex.raw(createTableSql)
      .then(() => knex.raw(insertSql))
      .then(() => knex.raw(findItemsSql))
      .then(res => res.rows)
      .should.become([
        { id: 1, item: 'milk', qty: 2, units: 'gallons' },
        { id: 8, item: 'oj', qty: 3, units: 'gallons' }
      ], done())
  });

  it("should be able to implement SQL functions like Count", (done) => {
    const createTableSql = fs.readFileSync('src/01-create-table.sql', 'utf8');
    const insertSql = fs.readFileSync('src/02-insert-rows.sql', 'utf8');
    const countSql = fs.readFileSync('src/04-count-items.sql', 'utf8');

    return knex.raw(createTableSql)
      .then(() => knex.raw(insertSql))
      .then(() => knex.raw(countSql))
      .then(res  => parseInt(res.rows[0].count))
      .should.become(8, done())
  });

  it("should be able to remove items from a table", (done) => {
    const createTableSql = fs.readFileSync('src/01-create-table.sql', 'utf8');
    const insertSql = fs.readFileSync('src/02-insert-rows.sql', 'utf8');
    const removeSql = fs.readFileSync('src/05-remove-rows.sql', 'utf8');

    return knex.raw(createTableSql)
      .then(() => knex.raw(insertSql))
      .then(() => knex.raw(removeSql))
      .then(res => res.rows)
      .should.become([
        { id: 3, item: 'butter', qty: 12, units: 'sticks' },
        { id: 5, item: 'sour cream', qty: 1, units: 'dollop' },
      ])
      .then(() => knex('list'))
      .should.become([
        { id: 1, item: 'milk', qty: 2, units: 'gallons' },
        { id: 2, item: 'eggs', qty: 1, units: 'dozen' },
        { id: 4, item: 'flour', qty: 1, units: 'pound' },
        { id: 6, item: 'apples', qty: 2, units: 'bushels' },
        { id: 7, item: 'sugar', qty: 2, units: 'pounds' },
        { id: 8, item: 'oj', qty: 3, units: 'gallons' },
      ], done())
    })

});
