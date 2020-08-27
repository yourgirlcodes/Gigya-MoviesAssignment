import React from "react";

const api_key = "8923d36e31d7a495303d48e5eee63381";

export class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sixtyTrending: []
    };
  }

  componentDidMount() {
    this.getSixtyTrendingMovies();
  }


  //extract this to redux
  getSixtyTrendingMovies = async () => {
    let trending = [...this.state.sixtyTrending];
    for (let i = 1; i <= 3; i++) {
      await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&page=${i}`
      )
        .then(res => res.json())
        .then(result => {
          result.results.map(result => trending.push(result));
          this.setState(
            {
              sixtyTrending: trending
            },
            () => console.log("state", this.state.sixtyTrending)
          );
        })
        .catch(err => err);
    }
    console.log(this.state);
  };

  starRating = (ratingOutOfTen) => {
      let greenStars = Math.floor(ratingOutOfTen / 2)
      let blackStars = 5 - greenStars

    return(<div className="">{blackStars}</div>
  )}

  render() {
    return (
      <React.Fragment>
      {/* this becomes props received from store */}
        {this.state.sixtyTrending.map(film => {
          return (
            <div
              className="movie-container"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w400${film.poster_path})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "300px",
                width: "150px"
              }}
            >
              <div className="release-date">Released: {film.release_date}</div>
              {this.starRating(film.vote_average)}
              <div>{film.overview}</div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
