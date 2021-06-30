# Mock_Travel_Database

## Description:
This is a sub-folder to house the database checkpoint for USSF SDI Cohort #2. This checkpoint involves generating a mock database with destination and airline information and performing SQL queries. SQL queries are posted as images in this README in the [Challenges](#challenges) section.

The following tools and packages were used:
  1. Docker
  2. PostgreSQL
  3. Knex
  4. pg

## Initial Data:
#### Destinations:
```js
[
    {
        name: "Thailand",
        average_temp: 82,
        cost_of_flight: 765,
        has_beach: true,
        has_mountains: true
    },
    {
        name: "Minnesota",
        average_temp: 41,
        cost_of_flight: 235,
        has_beach: false,
        has_mountains: false
    },
    {
        name: "New Zealand",
        average_temp: 66,
        cost_of_flight: 433,
        has_beach: true,
        has_mountains: true
    },
    {
        name: "England",
        average_temp: 45,
        cost_of_flight: 290,
        has_beach: false,
        has_mountains: false
    },
    {
        name: "Tristan da Cunha",
        average_temp: 59,
        cost_of_flight: 1304,
        has_beach: true,
        has_mountains: true,
    }
]
```
#### Airlines:
```js
[
  {
    name: "Spirit",
    destinations_flown_to: ["New Zealand", "Scotland"]
  },
  {
    name: "Lufthansa",
    destinations_flown_to: ["Tristan da Cunha", "Scotland", "Thailand"]
  },
  {
    name: "Delta",
    destinations_flown_to: ["Thailand", "Minnesota", "England", "Scotland"]
  },
  {
    name: "Southwest"
    destinations_flown_to: ["New Zealeand", "Tristan de Cunha", "Minnesota"]
  }
]
```
## To Begin:
Done using Knex
  1. Create a database called mock_travel_database
      - [x] See knex.js file
  2. Create a table called destinations and populate it with each location's id, name, average_temp, has_beaches, has_mountains, and cost_of_flight.
      - [ ] See knex migration and seed files
  3. Create a table called airlines and populate it with each airline's name and id.
      - [ ] See knex migration and seed files

## Challenges:
Done using Docker and PostgreSQL
  1. All of the vacation destinations.
![Challenge 1](./pictures/temp.png)
  2. All destinations where you can swim at the beach.
![Challenge 2](./pictures/temp.png)
  3. All destinations where the average temperature is over 60 degrees.
![Challenge 3](./pictures/temp.png)
  4. All destinations where you can swim at the beach AND go to the mountains.
![Challenge 4](./pictures/temp.png)
  5. All destinations where flights cost less than $500 and you can hike in the mountains.
![Challenge 5](./pictures/temp.png)
  6. Add an entry for The Bahamas, where the average temperature is 78, it has beaches but no mountains, and the flights cost $345.
![Challenge 6](./pictures/temp.png)
  7. Turns out, the cost of flights to New Zealand has increased- [ ] ! Update New Zealand's entry for flight cost to $1000.
![Challenge 7](./pictures/temp.png)
  8. Turns out, Minnesota isn't a vacation destination. Please delete it from the database.
![Challenge 8](./pictures/temp.png)
  9. When the data set was written, the author mistakently wrote "England" when they actually meant "Scotland". Please update that entry in the database.
![Challenge 9](/pictures/temp.png)
  10. Create a join table that joins the airlines and the destinations tables by correlating which airlines fly to which destinations.
![Challenge 10](./pictures/temp.png)
  11. All airlines that fly to New Zealand.
![Challenge 11](./pictures/temp.png)
  12. All airlines that do NOT fly to Scotland.
![Challenge 12](./pictures/temp.png)
  13. All of the data for all vacation destinations.
![Challenge 13](./pictures/temp.png)