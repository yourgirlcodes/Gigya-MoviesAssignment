import React from "react";

const films = [
  {
    name: "first",
    released: "released",
    rating: 3,
    description: "description"
  },
  {
    name: "second",
    released: "released",
    rating: 5,
    description: "description"
  }
];

export const Movies = () => {
  return (
    <React.Fragment>
      {films.map(film => {
        return (
          <div className="movie-container">
            Movie component, see comments
            <div>Tooltip</div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

// Movie components:
// Stars
// Release Date
// Movie Container && Tooltip (background is the image)
