
export const GET_SIXTY_MOVIES = "GET_SIXTY_MOVIES";

export const GET_MOVIES_BEGIN = "GET_MOVIES_BEGIN";
export const GET_MOVIES_IN_PROCESS = "GET_MOVIES_IN_PROCESS";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

export const getMoviesBegin = () => ({
  type: GET_MOVIES_BEGIN
});

export const gettingMovies = (movies,loading) => ({
  type: GET_MOVIES_IN_PROCESS,
  payload: { movies, loading }
});

export const getMoviesSuccess = (movies, loading) => ({
  type: GET_MOVIES_SUCCESS,
  payload: { movies, loading }
});

export const getMoviesError = error => ({
  type: GET_MOVIES_FAILURE,
  payload: { error }
});

