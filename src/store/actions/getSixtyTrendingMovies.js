import {
  getMoviesBegin,
  gettingMovies,
  getMoviesSuccess,
  getMoviesError
} from "./moviesActions";
import { api_key } from "../../constants/api_key";

//extract this to redux
// export const getSixtyTrendingMovies = async () => {
//     console.log("in");
//     let movieArray = [];

//     for (let i = 1; i <= 3; i++) {
//       console.log("in 2");

//       await fetch(
//         `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&page=${i}`
//       )
//         .then(res => res.json())
//         .then(json => {
//           console.log("in 3");
//           json.results.map(result => movieArray.push(result));
//           getMoviesSuccess(movieArray)

//           return movieArray;
//         })
//       .catch(err => getMoviesError(err));
//     }
//     return getMoviesSuccess(movieArray)
//   };

export const getSixtyTrendingMovies = () => {
  console.log("in");
  let movieArray = [];


        return dispatch =>  {
            for (let i = 1; i <= 3; i++) {

            dispatch(getMoviesBegin());
        
      console.log("in 2");
       fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&page=${i}`
      )
        .then(res => res.json())
        .then(json => {
          console.log("loading");
          json.results.map(result => movieArray.push(result));
          dispatch(gettingMovies(movieArray));
          return movieArray
        })
        .then(movieArray=>dispatch(getMoviesSuccess(movieArray))
        )
        .catch(err => getMoviesError(err));

    }


  };
};
