# Assignment 2 - Web API Integration

Name: Barry Nolan

### Features
 
+ Custom API endpoints to different TMDB links
+ TV Show schema
+ Person schema

## Set-up requirements

Ensure you have Mongo installed on your machine.

## API configuration

Before running the API, ensure you have a .env file with the following variables:

___________________________
NODE_ENV=development  
PORT=8080  
HOST=localhost  
MONGO_DB=your_mongo_url  
TMDB_KEY=your_tmdb_key  
SECRET=your_jwt_secret  
___________________________

## API Design

+ Users
    + /api/users?=register | POST | Create a new user
    + /api/users?=authenticate | POST | Authenticate existing user
+ Movies
    + /api/movies/:id | GET | Get details of specific movie
    + /api/movies/tmdb/upcoming | GET | Get list of upcoming movies
    + /api/movies/tmdb/top-rated | GET | Get list of top rated movies
+ TV Shows & People
    + /api/tvshows/:id | GET | Get details of specific TV show
    + /api/tvshows/:id/season/:season | GET | Get details of a specific season of a specific TV show
    + /api/people/:id | GET | Get details of a specific person
 
## Security and Authentication

A user can sign up or log in with a password that must be at least 8 characters long, inlcuding at least one number, letter, and special character. Upon logging in, a user is granted a JWT token. Some protected routes are inaccessible unless logged in.

Protected Routes:
+ /movies/:id
+ /tvshows/:id
+ /tvshows/:id/season/:season
+ /people/:id
+ /movies/upcoming
+ /movies/top-rated

## Integration with React App

To integrate the API into the React app, I first had to add a "Log In" or "Log Out" option to the site header. Following this, I began replacing existing API functions in api/tmdb-api.js with new functions that fetch from my own API in api/movies-api.js.

Pages that use Web API functions:
+ addMovieReviewPage.js - getMovie
+ favouriteMoviesPage.js - getMovie
+ movieDetailsPage.js - getMovie
+ peopleDetailsPage.js - getPerson
+ topRatedMoviesPage.js - getTopRatedMovies
+ tvSeasonDetailsPage.js - getTVSeason
+ tvShowDetailsPage.js - getTVShow
+ upcomingMoviesPage.js - getUpcomingMovies










