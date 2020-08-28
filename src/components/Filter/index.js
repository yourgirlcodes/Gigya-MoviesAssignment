import React, { useState } from "react";
import { connect } from "react-redux";
import { filterForNameOrRating } from "../../store/actions/helperActions";
import {
  Accordion,
  Checkbox,
  Typography,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  TextField,
  Button
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Filter = ({ movies, filterForNameOrRating }) => {
  const [search, setSearch] = useState(null);
  const [input, setInput] = useState("");

  const handleSubmit = (e, type) => {
    e.preventDefault();
    console.log("in", input);
    filterForNameOrRating(movies.movies,type, input);
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
          <Typography>Filter by Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Enter Keyword"
                onChange={e => setInput(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={e => handleSubmit(e, "title")}
              >
                Submit
              </Button>
            </form>
          </Typography>
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

export default connect(mapStateToProps, { filterForNameOrRating })(Filter);
