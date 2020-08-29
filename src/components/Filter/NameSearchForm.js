import React, { useState } from "react";
import { connect } from "react-redux";
import { filterForNameOrRating } from "../../store/actions/helperActions";
import { TextField, Button } from "@material-ui/core";
import { Form } from "./styled";

const SearchForm = ({ movies, filterForNameOrRating }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e, type) => {
    e.preventDefault();
    filterForNameOrRating(movies.movies, type, input);
  };

  const handleClear = e => {
    setInput(" ");
    filterForNameOrRating(movies.allMovies, "clear", null);
  };

  return (
    <Form noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Enter Keyword"
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      <Button
        style={{ marginRight: "5px", marginLeft: "5px" }}
        variant="contained"
        color="primary"
        type="submit"
        onClick={e => handleSubmit(e, "title")}
      >
        Submit
      </Button>
      <Button variant="contained" color="primary" onClick={e => handleClear(e)}>
        Clear
      </Button>
    </Form>
  );
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
    loading: state.loading
  };
}

export default connect(mapStateToProps, { filterForNameOrRating })(SearchForm);
