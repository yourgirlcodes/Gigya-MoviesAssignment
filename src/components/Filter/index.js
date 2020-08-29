import React from "react";
import  FilterByName from "./FilterByName";
import  FilterByGenre  from "./FilterByGenre";

export const Filter = () => {
  return (
    <React.Fragment>
      <FilterByName />
      <FilterByGenre />
    </React.Fragment>
  );
};
