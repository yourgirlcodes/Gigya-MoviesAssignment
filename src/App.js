import React from "react";
import { Header } from "./components/Header";
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

  async componentWillMount() {
    await this.props.getSixtyTrendingMovies();
  }

  render() {
    console.log("render", this.props);
    return (
      <React.Fragment>
        <HeaderText>Top 60 Trending Movies for Last Week</HeaderText>
        <Filter />
        <MoviesList />
      </React.Fragment>
    );
  }
}

// export default App;

// Considerations:
// Call to API for 60 Movies (call is 3 times)
// Filtering = API call (they have an endpoint)
// In Redux store update the array of objects you get from the API call -- source of truth!

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
