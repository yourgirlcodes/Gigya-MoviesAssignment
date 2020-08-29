import React, { useState } from "react";
import { connect } from "react-redux";
import { filterForNameOrRating } from "../../store/actions/helperActions";
import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Button
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchForm from './NameSearchForm.js'

const FilterByName = () => {

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
        <SearchForm />
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};


export default FilterByName;
