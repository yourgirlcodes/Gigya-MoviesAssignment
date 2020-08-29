import React from "react";
import {
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Genres  from "./Genres";

const FilterByGenre = () => {
  return (
    <React.Fragment>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filter by Genre</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Genres />
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};

export default FilterByGenre;
