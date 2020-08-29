import React from "react";
import FilterByName from "../components/Filter/FilterByName";
import FilterByGenre from "../components/Filter/FilterByGenre";
import store from "../store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";


describe("Filter component", () => {
  it("filter renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <FilterByName />
        <FilterByGenre />
      </Provider>,
      div
    );
  });
});
