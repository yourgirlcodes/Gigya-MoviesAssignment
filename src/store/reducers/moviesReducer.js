import {
    GET_MOVIES_BEGIN,
    GET_MOVIES_IN_PROCESS,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILURE
  } from '../actions/moviesActions';
  
  const initialState = {
    movies: [],
    allMovies: [],
    loading: false,
    error: null,
    search: null
  };
  
  export default function moviesReducer(state = initialState, action) {
      console.log(state, action)
    switch(action.type) {
      case GET_MOVIES_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
        case GET_MOVIES_IN_PROCESS:
                console.log(state, action)
            // All done: set loading "false".
            // Also, replace the movies with the ones from the server
            return {
              ...state,
              loading: true,
              movies: action.payload.movies,
            };
    
      case GET_MOVIES_SUCCESS:
        // All done: set loading "false".
        // Also, replace the movies with the ones from the server
        console.log(state, action)

        return {
          ...state,
          loading: false,
          movies: action.payload.movies
        };
  
      case GET_MOVIES_FAILURE:
        // Failed - loading is false
        // Error - saving it 
        // Movies - not sure what I want yes
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          movies: action.payload.movies,
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }