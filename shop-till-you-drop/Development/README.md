# Shop Till You Drop

<img src="./docs/header.png" alt="header.png" width="40%"/>

## Table of Contents

1.  [Overview](#Overview)
2.  [Description](#Description)
3.  [Usage](#Usage)
4.  [Installation](#Installation)
5.  [Libraries](#Libraries)
6.  [License](#License)

## Overview

(NO LONGER MAINTAINED, but still accessible on Heroku deployment)

This application was made to satisfy part 1 of the United States Space Force (USSF) Z-prefix assessment. Part 1 requires guardians to build a Create, Read, Update, Delete and Route (CRUD-R) application that has a client (frontend), server, database, and deployment to a cloud platform. Containerization, Test driving and Test-Driven-Development (TDD) are not required, but recommended for this assessment.

- Database: built in PostgreSQL
- Client: built in ReactJS
- Server: built using Express
- Repository: [GitHub](https://github.com/justinthelaw?tab=repositories)
- Deployment: [Heroku](https://shop-till-you-drop.herokuapp.com/)

## Description

This full-stack PERN application features a minimalistic client-facing interface scripted in ReactJS, an ExpressJS server with an API and client HTTP request handler, and a PostgreSQL database.

The client contains conditional rendering, protected routes, and modular dialog components for user input and notification. The login component allows users to login and register accounts, with regex and data conflict checks. The home component renders a markdown file and acts as both the authorized user landing page and about page for the app. The lists component allows users to add, edit, and delete stores and items, and also open a google map showing the closest store based on their device location. The account component allows users to modify their account information, to include username, email, and password, with regex and data conflict checks. Styling of the client consists of a mix of CSS, Material-UI components and Material-UI useStyles/makeStyles.

The server is split into an API handler and a client HTTP request handler. The API allows users to query specific data or views. The HTTP request side handles requests sent to it by the client. Both sides use SQL to send queries to the database and manipulate data from the resulting queries. The user passwords are protected with secure hashing and salting functionality. Cookies with an encrypted and randomized token are used to persist login for approximately 1-day.

The PostgreSQL database is set-up with data validation and cascading. Foreign and primary key relationships dynamically alter table data based on user changes and inputs.

The setup script automates the setup of the dev environment for users of the dockerized or source code versions of this application. Changes applied to certain assets and variables are placed in the correct areas of the application structure.

Below is the database schema for this application:

![Application Schema](./docs/schema.png)

## Usage

### App

Try it out for yourself! Please follow the instructions below to access the app in 1 of 3 ways: Heroku, Docker, or Source Code.

### API

`<baseURL>/<route>` leads to the application pages for client users

`<baseURL>/<non-existent route>` leads to a 404 Error page with an Easter Egg

`<baseURL>/api/index` leads to the api landing page, written with Pug

`<baseURL>/api/<non-existent api route>` leads to a 404 Error page page, written with Pug

`<baseURL>/api/users` leads to a user list with usernames (PK hidden for privacy)

```js
[
  {
    name: "Justin Law",
  },
  {
    name: "Test",
  },
];
```

`<baseURL>/api/items` leads to a global item list

```js
[
  {
    id: 1,
    name: "Candles",
    quantity: "3 jars",
    store_id: 1,
    user_id: 1,
  },
  {
    id: 2,
    name: "Batteries",
    quantity: "6-pack",
    store_id: 2,
    user_id: 3,
  },
  {
    id: 3,
    name: "Candles",
    quantity: "3 jars",
    store_id: 3,
    user_id: 2,
  },
];
```

`<baseURL>/api/items/<userId>` leads to a user-specific item list

```js
[
  {
    id: 1,
    name: "Candles",
    quantity: "3 jars",
    store_id: 1,
    user_id: 1,
  },
];
```

`<baseURL>/api/stores` leads to a global stores list

```js
[
  {
    id: 1,
    name: "Target",
    user_id: 1,
  },
  {
    id: 2,
    name: "Target",
    user_id: 2,
  },
  {
    id: 3,
    name: "Amazon",
    user_id: 2,
  },
];
```

`<baseURL>/api/stores/<userId>` leads to a user-specific store list

```js
[
  {
    id: 2,
    name: "Target",
    user_id: 2,
  },
  {
    id: 3,
    name: "Amazon",
    user_id: 2,
  },
];
```

## Installation

The installation options below are ordered from least configurable to most configurable.

### Heroku

1. To use the application hosted on Heroku, please click or paste the following URL in your browser: https://shop-till-you-drop.herokuapp.com/.

2. To access the API, use the following URL in your browser: https://shop-till-you-drop.herokuapp.com/api/.

### Set-up Script

- To automate the updating of all configuration and asset files, I've written a bash script named "setup.sh". This script must be run after any changes you make to the README.md, header.png, schema.png, or the .env file.

- Run `chmod +x scripts/setup.sh` to give permission for the bash script to run.

- The script does the following:

  - Moves a copy of the .env file to the client folder and appends "REACT_APP\_" to the front of all variables.
  - Moves the README.md, header.png, and schema.png to the client/src/assets folder for rendering the Home component.
  - For more information on how the .env file works, please keep reading the instructions below.

- Run `scripts/setup.sh` after modifying the .env.example file in the first steps of the Docker and Source Code instructions.

### Docker

1. Go to the config folder and modify the .env.example file using the [format in this README](#Environment-Variables) and the format in the provided .env.example file. Delete the ".example" extension from the .env filename before running the application. Run setup.sh after you are done making modifications.

2. Run `docker-compose --env-file ./config/.env up --build` and using your browser, proceed to the address and port for the client as specified in your .env file (e.g. http://localhost:3000).

3. To access the API, proceed to the address and port for the server as specified in your .env file (e.g. http://localhost:3001/api).

### Source Code

_NOTE 1_: The following instructions must be read and followed in-order!

_NOTE 2_: The set-up of this repository and instructions were made to be as developer-agnostic as possible. Custom configuration for ports and names can be done in the .env.example file as noted later in this installation section.

1. Modify the .env.example file using the format commented within the .env.example file. Delete the .example portion of the extension from the .env file before running the application. Run setup.sh after you are done making modifications.

2. Start your Docker app and run the following command to spin-up PostgreSQL and the required database: `docker run --rm --name shop-till-you-drop -v $PWD/db:/docker-entrypoint-initdb.d/ --env-file ./config/.env -p $(awk -F "=" '/PG_PORT/{print $NF}' ./config/.env):5432 postgres:latest`

3. Go to the client folder and execute `npm install`

4. Go to the server folder and execute `npm install`

5. (OPTIONAL) If you change the seeds or migrations, or the database becomes corrupted, you can run `npm run db:reset` in the server folder to run the migrations and seeds again.

6. Go to the client and execute `npm run dev` to start the React app.

7. Go to the server and execute `npm run dev` to start the Express server.

8. Proceed to the address and port for the client as specified in your .env file (e.g. http://localhost:3000)

9. Proceed to the address and port for the API server as specified in your .env file (e.g. http://localhost:3001/api)

### Environment Variables

Environment variables that control the operation of the app are defined in the
`.env` file in the application root. These variables and their usage are shown
in the following table.

Environment variables maintained in the `.env` file are made available to the
application code via `process.env.<variable-name>`. For example, the
port for the client is accessed in the code by referencing
`process.env.PORT`.

| Environment Variable | Description                              | Example Setting                  | Applicability    |
| :------------------- | :--------------------------------------- | :------------------------------- | :--------------- |
| PORT                 | Local and/or container port for client   | 3000                             | server, client   |
| HOST_DEV             | Local and/or container host for server   | localhost                        | server, client   |
| HOST_LIVE            | Deployed host for server                 | shop-till-you-drop.herokuapp.com | server, client   |
| HOST_DB              | Docker host for database                 | postgres                         | server           |
| PROTO_DEV            | Local and/or container protocol          | http                             | server. client   |
| PROTO_LIVE           | Deployed protocol                        | https                            | server, client   |
| API_PORT             | Local and/or container port API server   | 3001                             | server, client   |
| POSTGRES_DB          | Database name                            | shop-till-you-drop               | server, database |
| POSTGRES_USER        | PostgreSQL username                      | postgres                         | server, database |
| POSTGRES_PASSWORD    | PostgreSQL password                      | docker                           | server, database |
| PG_PORT              | Local and/or container port for database | 5432                             | server, database |
| GOOGLE_API_KEY       | Key for Google's API                     | XXXXXXXXXXXXXXXXXXXX             | client           |

## Libraries

### Client

| Module/Library    | Environment | Description                                        |
| :---------------- | :---------- | :------------------------------------------------- |
| @material-ui/core | Development | Material Design React components                   |
| pg                | Runtime     | PostgreSQL client                                  |
| react-markdown    | Runtime     | Markdown to HTML parser                            |
| remark-gfm        | Runtime     | GitHub markdown extension                          |
| react             | Runtime     | UI Library                                         |
| react-dom         | Runtime     | DOM renderer for React                             |
| react-scripts     | Runtime     | Scripts and configuration used by Create React App |
| dotenv            | Runtime     | .env file reader                                   |
| js-cookie         | Runtime     | Cookies                                            |

### Server

| Module/Library | Environment | Description         |
| :------------- | :---------- | :------------------ |
| debug          | Development | Debug utility       |
| nodemon        | Development | Live server updates |
| express        | Runtime     | Web framework       |
| http-errors    | Runtime     | Http error creation |
| morgan         | Runtime     | Logger              |
| jade           | Runtime     | Template engine     |
| cookie-parser  | Runtime     | Cookie middleware   |
| cors           | Runtime     | CORS middleware     |
| dotenv         | Runtime     | .env file reader    |
| pg             | Runtime     | Postgres client     |
| bcrypt         | Runtime     | Hash and Salt       |

## License

This software is licensed under the [MIT](./LICENSE) license.
