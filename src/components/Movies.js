import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map(movie => (
          <div>
            <h4>{movie.title}</h4>
            <h5>{movie.time}</h5>
            <ul>
              {movie.genres.map(genre => (<li>{genre}</li>))}
            </ul>
          </div>
        ) )}
    </div>
  );
};

export default Movies;
