# SQL Assessment

You are tasked with creating an application that stores your grocery list. As you know, the first step is to think about the data that you will need to store.

Our grocery list looks like the following:

- milk - 2 gallons
- eggs - 1 dozen
- butter - 12 sticks
- flour - 1 pound
- sour cream - 1 dollop
- apples - 2 bushels
- sugar - 2 pounds
- oj - 3 gallons

## Tasks
#### Write the SQL query/ies to:

1. Create a table named _list_ that stores your grocery list.
1. Insert items into your _list_ table.
1. Find items on your list that have the units _gallons_
1. Count all of the items on your grocery list.
1. Remove butter and sour cream from your list and _return_ what was deleted.

### How to submit

* Fork this repository
* clone your fork
* create a branch
* write the code necessary to get the tests to pass
* commit and push your branch
* create a pull request and submit


## Running the Tests 

To run the tests locally, run `npm test` from within the project folder. 

To run the tests using Docker, you can run `docker-compose up`. However, when you make changes to your files, you'll need to **rebuild the image** so that the tests are testing the correct code. To do this, run `docker-compose up --build`. 