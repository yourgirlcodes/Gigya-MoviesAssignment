import api_key from "../constants/api_key";

export const genres = async () => {
  var genreArray = [];
  await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=8923d36e31d7a495303d48e5eee63381&language=en-US"
  )
    .then(res => {
      console.log("res =====>", res);
      res.json();
    })
    .then(json => {
      console.log("json ====>", json);
      genreArray.push(json);
    });
    console.log('genreArray', genreArray)
  return genreArray;
};
