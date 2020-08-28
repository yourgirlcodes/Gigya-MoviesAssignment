import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  filterForNameOrRating,
  getSixtyTrendingMovies
} from "../../store/actions/helperActions";
import {
  Accordion,
  RadioGroup,
  Typography,
  AccordionDetails,
  AccordionSummary,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
  FormControl
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import genres from '../../api/getGenres'


const FilterByGenre = (
  { movies, filterForNameOrRating }
) => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState(28);
  const [genres, setGenres] = useState([])

   useEffect( () =>{
    var genreArray = [...genres];
      fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=8923d36e31d7a495303d48e5eee63381&language=en-US"
    )
      .then(res => {
        return res.json();
      })
      .then(json => {
        genreArray = json.genres
        setGenres(genreArray)
      });
  }, []);
  
  const handleChange = (e) => {
    setValue(parseInt(e.target.value))
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("in", input);
    filterForNameOrRating(movies.movies, "genre", parseInt(input));
  };

  const handleClear = e => {
    // e.preventDefault();
    setInput(" ");

    // getSixtyTrendingMovies();
  };

  return (
    <React.Fragment>
      Advanced Filtering
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filter by Genre</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              { genres.length > 0 && genres.map(genre => {
                return (
                  <FormControlLabel
                    value={genre.id}
                    control={<Radio />}
                    label={genre.name}
                  />
                );
              })}
              <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={e => handleSubmit(e)}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={e => handleClear(e)}
            >
              Clear
            </Button>

            </RadioGroup>

          </FormControl>{" "}

        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};

// search by Genre: click: fires off function that pulls list of genres
// keyword: filter according to words includes
// Release date: can have date picker
// vote average: filer

function mapStateToProps(state) {
  return {
    movies: state.movies,
    loading: state.loading
  };
}

export default connect(mapStateToProps, { filterForNameOrRating })(
  FilterByGenre
);
