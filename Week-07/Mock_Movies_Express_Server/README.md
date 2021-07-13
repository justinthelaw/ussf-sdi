# Mock_Movies_Express_Server

## Build the backend of the GMDB web application using Express

## Using Express, implement the correct API routes and Express functionality needed in the backend of GMDB

## most important: using proper route methods and params (query, path, body)

- [X] npx express-generator express-checkpoint --no-view


## GET MOVIES

- [X] be able to receive a list of movies from the database, so that I can list them on my interface.

    ## GET URL
      /movies	GET

    ## Example Description
    200	List of movies
    404	Movie ID not found
    400	Invalid ID supplied

- [X] be able to search by title for movies from the database, so that I can list them on my interface.

    ## GET URL
    /movies?title={titleQuery} GET

- [X] be able to receive an individual movie record from the database, so that I can display its data on my interface.

    ## GET URL
      /movies/{movieId} GET

## POST a movie
- [X]  be able to send a new movie record to the database, so that it can be available for my future use.

    ## Parameters
    body	{
          "title": "From Paris With Love",
          "runtime": 94,
          "release_year": 2010,
          "director": "Pierre Morel",
          },

## DELETE a movie
- [X]  be able to delete a movie record from the database, so that it is no longer an entry in the list of movies.

    ## GET URL
          /movies/{movieId} DELETE

## STRETCH GOAL

- [ ] Use cookies to set 2 cookies named firstName and lastName.
- [ ] Create a route/endpoint named setCookie that sets the cookies with your first name and last name.
- [ ] Create a route/endpoint named readCookie that displays your name on the browser using the cookies that were set.
# express-checkpoint-grp02
