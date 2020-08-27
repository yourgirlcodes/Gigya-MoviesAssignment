import api_key from '../../constants/api_key'

export const FETCH_SIXTY_MOVIES = "FETCH_SIXTY_MOVIES";

const fetchSixtyMovies = (dispatch) => {
for(i=1; i<=3; i++){
      await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=8923d36e31d7a495303d48e5eee63381&page=${i}`
      ).then(res => console.log(res));
    };
}