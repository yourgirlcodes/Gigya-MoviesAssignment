import React from "react";
import {connect} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";
import {MovieList, MovieContainer} from './styled'


class MoviesList extends React.Component {
  constructor(props) {
    super(props);
  }

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

  componentDidUpdate(props, newProps){
    console.log(props, newProps)
  }

  render() {
    return (
      <MovieList>
        {this.props.movies.loading ? <div>hi</div> :
        this.props.movies.movies.length > 0 && this.props.movies.movies.map(film => {
          return (
            <MovieContainer
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${film.poster_path})`}}
              poster={film.poster_path}
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
            </MovieContainer>
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