import React from "react";
import { Header } from "./components/Header";
import MoviesList from "./components/Movies";
import {getSixtyTrendingMovies} from './store/actions/getSixtyTrendingMovies'
import "./App.css";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  async componentWillMount() {
    await this.props.getSixtyTrendingMovies()
  }
  //  getSixtyTrendingMovies = async () => {
  //   let trending = [...this.state.sixtyTrending];
  //   for (let i = 1; i <= 3; i++) {
  //     await fetch(
  //       `https://api.themoviedb.org/3/trending/movie/week?api_key=8923d36e31d7a495303d48e5eee63381&page=${i}`
      
  //       )
  //       .then(res => res.json())
  //       .then(result => {
  //         result.results.map(result => trending.push(result));
  //         this.setState(
  //           {
  //             sixtyTrending: trending
  //           },
  //           () => console.log("state", this.state.sixtyTrending)
  //         );
  //       })
  //       .catch(err => err)
  //   }
  //   console.log(this.state)
  // };

render(){
  console.log("render", this.props)
  return (
    <React.Fragment>
      <Header />
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



function mapStateToProps(state){
  return{
      movies: state.movies
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getSixtyTrendingMovies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)