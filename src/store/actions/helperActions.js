import {
  getMoviesBegin,
  gettingMovies,
  getMoviesSuccess,
  getMoviesError
} from "./moviesActions";
import { api_key } from "../../constants/api_key";

export const getSixtyTrendingMovies = () => {
  let movieArray = [];

  return dispatch => {
    for (let i = 1; i <= 3; i++) {
      dispatch(getMoviesBegin());

      fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&page=${i}`
      )
        .then(res => res.json())
        .then(json => {
          json.results.map(result => movieArray.push(result));
          dispatch(gettingMovies(movieArray));
          return movieArray;
        })
        .then(movieArray => dispatch(getMoviesSuccess(movieArray)))
        .catch(err => getMoviesError(err));
    }
  };
};

export const filterForNameOrRating = (movieList, searchType, searchInput) => {
  let filteredMovies = [];
  return dispatch => {

    switch (searchType) {
      case "title":
        filteredMovies =
          movieList.length > 0 &&
          movieList.filter(o =>
            o["original_title"]
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          );
        dispatch(getMoviesSuccess(filteredMovies));
        return filteredMovies;

      case "genre":
        filteredMovies =
          movieList.length > 0 &&
          movieList.filter(o => o["genre_ids"].indexOf(searchInput) > 0);
        dispatch(getMoviesSuccess(filteredMovies));
        return filteredMovies;

      case "clear":
        dispatch(getMoviesSuccess(movieList));
        return movieList;
    }
  };
};
