import React from "react";
import MoviesList from "./components/Movies";
import { getSixtyTrendingMovies , filterForNameOrRating} from "./store/actions/helperActions";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { HeaderText } from "./App.styled";
import {Filter} from './components/Filter';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.getSixtyTrendingMovies();
  }

  render() {
    return (
      <React.Fragment>
        <HeaderText>Top 60 Trending Movies for Last Week</HeaderText>
        <Filter />
        <MoviesList />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getSixtyTrendingMovies
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
