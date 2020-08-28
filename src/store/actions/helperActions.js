import {
  getMoviesBegin,
  gettingMovies,
  getMoviesSuccess,
  getMoviesError
} from "./moviesActions";
import { api_key } from "../../constants/api_key";
import { Switch } from "@material-ui/core";

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
  console.log(movieList, searchType, searchInput);
  return dispatch => {
    console.log("in 1");

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
        console.log('searchInput', typeof parseInt(searchInput), parseInt(searchInput))
        debugger;
        
        filteredMovies =
          movieList.length > 0 &&
          movieList.filter(o => o["genre_ids"].includes(searchInput));
        dispatch(getMoviesSuccess(filteredMovies));

        return filteredMovies;
    }
    dispatch(getMoviesSuccess(filteredMovies));
  };
};
