import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div>
          <h2>Name: {movie.title}</h2>
          <h3>Time: {movie.time}</h3>
          {movie.genres.map((genre, index) => (
            <li className="movie" key={index}>
              {genre}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Movies;
