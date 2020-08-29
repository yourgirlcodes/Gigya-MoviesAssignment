import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { filterForNameOrRating } from "../../store/actions/helperActions";

import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  FormControl
} from "@material-ui/core";

const genreUrl =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=8923d36e31d7a495303d48e5eee63381&language=en-US";

const Genres = ({ movies, filterForNameOrRating }) => {
  const [value, setValue] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(genreUrl)
      .then(res => {
        return res.json();
      })
      .then(json => {
        setGenres(json.genres);
      });
  }, []);

  const handleChange = e => {
    setValue(parseInt(e.target.value));
  };

  const handleSubmit = e => {
    filterForNameOrRating(movies.movies, "genre", value);
  };

  const handleClear = e => {
    setValue(null);
    filterForNameOrRating(movies.allMovies, "clear", null);
  };

  return (
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              {genres && genres.length > 0 &&
                genres.map(genre => {
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
                style={{"marginBottom": "5px"}}

              >
                Submit
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={e => handleClear(e)}
              >
                Clear
              </Button>
            </RadioGroup>
          </FormControl>
  );
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
    loading: state.loading
  };
}

export default connect(mapStateToProps, { filterForNameOrRating })(
    Genres
);
