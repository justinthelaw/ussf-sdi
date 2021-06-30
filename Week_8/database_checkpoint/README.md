# Mock_Travel_Database

### Description:
This is a sub-folder to house the database checkpoint for USSF SDI Cohort #2. This checkpoint involves generating a mock database with destination and airline information and performing SQL queries. SQL queries are posted as images in this README in the [Challenges](#challenges) section.

The following tools and packages were used:
  1. Docker
  2. PostgreSQL
  3. Knex
  4. pg

### To Begin:
  1. Create a database called mock_travel_database
      - [x] Done using Knex
  2. Create a table called destinations and populate it with each location's id, name, average_temp, has_beaches, has_mountains, and cost_of_flight.
      - [ ] Done using Knex
  3. Create a table called airlines and populate it with each airline's name and id.
      - [ ] Done using Knex

### Challenges:
  1. All of the vacation destinations.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 1]('./assets/)
  2. All destinations where you can swim at the beach.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 2]('./assets/)
  3. All destinations where the average temperature is over 60 degrees.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 3]('./assets/)
  4. All destinations where you can swim at the beach AND go to the mountains.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 4]('./assets/)
  5. All destinations where flights cost less than $500 and you can hike in the mountains.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 5]('./assets/)
  6. Add an entry for The Bahamas, where the average temperature is 78, it has beaches but no mountains, and the flights cost $345.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 6]('./assets/)
  7. Turns out, the cost of flights to New Zealand has increased- ! Update New Zealand's entry for flight cost to $1000.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 7]('./assets/)
  8. Turns out, Minnesota isn't a vacation destination. Please delete it from the database.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 8]('./assets/)
  9. When the data set was written, the author mistakently wrote "England" when they actually meant "Scotland". Please update that entry in the database.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 9]('./assets/)
  10. Create a join table that joins the airlines and the destinations tables by correlating which airlines fly to which destinations.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 10]('./assets/)
  11. All airlines that fly to New Zealand.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 11]('./assets/)
  12. All airlines that do NOT fly to Scotland.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 12]('./assets/)
  13. All of the data for all vacation destinations.
      - [ ] Done using Docker and PostgreSQL
      - ![Challenge 13]('./assets/)