# List Anything

## Table of Contents

1.  [Overview](#Overview)
2.  [Description](#Description)
3.  [Installation](#Installation)
4.  [Usage](#Usage)
5.  [License](#License)

## Overview

List anything!

- Frontend: built in ReactJS
- Backend: built using Express
- Repositories: [DockerHub](https://hub.docker.com/u/justinthelaw) and [GitHub](https://github.com/justinthelaw?tab=repositories)
- Deployment: [Heroku](https://list-anything-sdi.herokuapp.com/)

## Description

List anything!

## Installation

The installation options below are ordered from easiest to hardest, and least configurable to most configurable.

### Heroku

1. To use the application hosted on Heroku, please click or paste the following URL in your browser: [List Anything](https://list-anything-sdi.herokuapp.com/)

### Docker

1. Modify the .env.example file using the format commented within the .env.example file. Delete the ".example" extension from the .env filename before running the application.

2. Run `docker-compose up` and using your browser, proceed to the address and port for the frontend as specified in your .env file and/or terminal log (e.g. `http://localhost:3000`)

### Source Code

1. Modify the .env.example file using the format commented within the .env.example file. Delete the .example portion of the extension from the .env file before running the application.

2. To run the application, please start your PostgreSQL Docker container and create a database as named in your .env file.

3. Go to the frontend folder and execute `npm install`

4. Go to the backend folder and execute `npm install`

5. To implement migrations into your database, while in the backend folder execute `npx knex migrate:latest`

6. To add seed data to your migrations, while in the backend folder execute `npx knex seed:run`

7. Go to the frontend and execute `npm start` to start the React app.

8. Go to the backend and execute `npm start` to start the Express server.

9. Proceed to the address and port for the frontend as specified in your .env file and/or terminal log (e.g. `http://localhost:3000`)

### Environment Variables

Environment variables that control the operation of the app are defined in the
`.env` file in the application root. These variables and their usage are shown
in the following table.

Environment variables maintained in the `.env` file are made available to the
application code via `process.env.<variable-name>`. For example, the
port for the React application is accessed in the code by referencing
`process.env.REACT_APP_PORT`.

| Environment Variable | Description         | Example Setting |
| :------------------- | :------------------ | :-------------- |
| REACT_APP_PORT       | Exposed local port  | 3000            |
| CLIENT               | SQL client          | pg              |
| DATABASE             | Database name       | db              |
| PG_USER              | PostgreSQL user     | postgres        |
| POSTGRES_PASSWORD    | PostgreSQL password | docker          |
| HOST                 | Connection host     | postgres        |
| PG_PORT              | PostgreSQL port     | 5432            |

## Usage

### Libraries

The app has the following internal dependencies:

#### Frontend

Frontend technologies and applicable environments:

| Module/Library | Environment | Description                                        |
| :------------- | :---------- | :------------------------------------------------- |
| antd           | Development | Material Design React components                   |
| pg             | Runtime     | PostgreSQL client                                  |
| react          | Runtime     | UI Library                                         |
| react-dom      | Runtime     | DOM renderer for React                             |
| react-scripts  | Runtime     | scripts and configuration used by Create React App |

#### Backend

Backend technologies and applicable environments:

| Module/Library | Environment | Description         |
| :------------- | :---------- | :------------------ |
| debug          | Development | Debug utility       |
| nodemon        | Development | Live server updates |
| express        | Runtime     | Web framework       |
| http-errors    | Runtime     | Http error creation |
| jade           | Runtime     | Template engine     |
| cookie-parser  | Runtime     | Cookie middleware   |
| cors           | Runtime     | CORS middleware     |

## License

This software is licensed under the [MIT](./LICENSE) license.
