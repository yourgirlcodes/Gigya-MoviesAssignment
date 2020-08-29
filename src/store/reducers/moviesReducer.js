import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_IN_PROCESS,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE
} from "../actions/moviesActions";

const initialState = {
  movies: [],
  allMovies: [],
  loading: false,
  error: null,
  search: null
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        movies: []
      };

    case GET_MOVIES_IN_PROCESS:
      return {
        ...state,
        loading: true,
        movies: action.payload.movies,
        allMovies: action.payload.movies
      };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies
      };

    case GET_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        movies: action.payload.movies
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
