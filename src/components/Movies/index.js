import React from "react";
import {connect} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";
import {MovieList} from './styled'
import {getSixtyTrendingMovies} from '../../store/actions/moviesActions'

const api_key = "8923d36e31d7a495303d48e5eee63381";

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   sixtyTrending: []
    // };
  }

//   async componentDidMount() {
//     await getSixtyTrendingMovies()
//   }

//   //extract this to redux
//   getSixtyTrendingMovies = async () => {
//     let trending = [...this.state.sixtyTrending];
//     for (let i = 1; i <= 3; i++) {
//       await fetch(
//         `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&page=${i}`
//       )
//         .then(res => res.json())
//         .then(result => {
//           result.results.map(result => trending.push(result));
//           this.setState(
//             {
//               sixtyTrending: trending
//             },
//             () => console.log("state", this.state.sixtyTrending)
//           );
//         })
//         .catch(err => err);
//     }
//     console.log(this.state);
//   };

  renderStarRating = ratingOutOfTen => {
    let greenStars = Math.floor(ratingOutOfTen / 2);
    let blackStars = 5 - greenStars;

    let starRating = [];

    for (let i = 0; i < greenStars; i++) {
      starRating.push(<FontAwesomeIcon icon={faStar} color="green" />);
    }

    for (let i = 0; i < blackStars; i++) {
      starRating.push(<FontAwesomeIcon icon={faStar} color="black" />);
    }

    return starRating;
  };

  render() {
      console.log('render props', this.props)
    return (
      <MovieList>
        {/* this becomes props received from store */}
        {this.props.movies.loading ? <div>hi</div> :
        this.props.movies.movies.length > 0 && this.props.movies.movies.map(film => {
          return (
            <div
              className="movie-container"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${film.poster_path})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "300px",
                width: "200px",
                margin: "5px",
                border: "2px solid black"
              }}
            >
              <Tooltip title={film.overview}>
                <div style={{height: "200px",
                width: "200px"}}>
                  <div className="release-date">
                    Released: {film.release_date}
                  </div>

                  {this.renderStarRating(film.vote_average)}
                  </div>
              </Tooltip>
            </div>
          );
        })}
        
      </MovieList>
    );
  }
}

function mapStateToProps(state){
    return{
        movies: state.movies,
        loading: state.loading

    }
}

export default connect(mapStateToProps)(MoviesList)