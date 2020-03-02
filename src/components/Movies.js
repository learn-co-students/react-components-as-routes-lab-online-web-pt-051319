import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div className="movie" key={movie.id}>
            <h2>Name: {movie.title}</h2>
            <h3>Time: {movie.time} mins</h3>
            <h4>
              Genres:
              <ul>
                {movie.genres.map((genre, key) => {
                  return <li key={key}>{genre}</li>;
                })}
              </ul>
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
