import { createStore } from "redux";

const initialState = {
  movies: [],
  search: "",
  loading: false
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
