### Film Browser - React-Redux Project with themoviedb API

## Architecture:

App 
    
    - components
       - Filter
            - FilterByGenre
            - FilterByName
            - Genres
            - NameSearchForm     
        - Header
        - Movies
    - constants
        - api_key
    - store
        - actions
            - helperActions
            - moviesActions
        - reducers
            - moviesReducer
            - rootReducer
    - tests
    

## Tech Stack:
1. React.js
2. Redux
3. Semantic-UI for React
4. Styled-Components
5. @testing-library/react for some tests

## Redux
Used to manage the state of the app

State is an object with key-value pairs like:
 
 state = {
 movies: [array of films either filtered or as received from  API]
 
 allMovies: [array of films received from API]
 
 loading: boolean illustrating state of fetching the API
 
 error: string
 }
 
 
 # Actions
 1. getMoviesBegin
 2. gettingMovies
 3. getMoviesSuccess
 4. getMoviesError
 
 # Action Types
1. GET_MOVIES_BEGIN
2. GET_MOVIES_IN_PROCESS
3. GET_MOVIES_SUCCESS
4. GET_MOVIES_FAILURE
 
 # Reducers
 moviesReducer 
 
 
## My thoughts:
Improvements can be made regarding testing - all the tests I had 'planned to have' are not present - I will add them soon as I learn how to use the testing technologies better (but, I did try my best :) )

Improvements can be made regarding filtering - I would like to add more filtering options

Improvements can be made regarding the UX of the Advanced Filtering Accordions and other small UI elements

General improvements regarding the code that will come with more experience


## How to run:
npm start will run the scripts

npm test will run the tests
 

This project uses the API of themoviedb: https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

This project was bootstrapped with [Create React App (https://github.com/facebook/create-react-app).




