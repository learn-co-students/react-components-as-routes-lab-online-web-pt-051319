import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => <div key={index}>
          <h4>Movie: {movie.title}</h4>
          <p>Runtime:{movie.time}</p>
          <p>Genres:</p>
          <ul>{movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}</ul>

        </div>
          )}
    </div>
  );
};

export default Movies;
