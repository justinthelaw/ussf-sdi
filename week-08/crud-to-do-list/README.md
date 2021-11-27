# CRUD_To_Do_List

### Instructions
  1. Please modify the .env.example file, following the format commented within the .env file. Delete the comments and the .example extension of the .env file before running the application.

  2. To run the application, please start your PostgreSQL docker container and CREATE DATABASE as named in your .env file.

  3. Go to the root of this repository and execute ```npm install``` to install Knex, pg, Express, and nodemon.

  4. To implement migrations into your database, execute ```npx knex migrate:latest```

  5. (OPTIONAL) To add seed data to your migrations, execute ```npx knex seed:run```

  6. Go to the root of this repository and execute ```npm start``` to start the Express server and React app.

  7. Start building CRUD to-do lists!

### Database Schema
![CRUD_To_Do_List_Database_Schema](./conops/schema.png)
