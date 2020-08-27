import React from "react";
import { Header } from "./components/Header";
import { Movies } from "./components/Movies";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Movies />
    </React.Fragment>
  );
}

export default App;

// Considerations:
// Call to API for 60 Movies
// Filtering 
// APP level: API calls
// In Redux store update the array of objects you get from the API call -- source of truth!