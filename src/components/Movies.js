import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => <div> Title: {movie.title}
        Time: {movie.time}
        <ul>
          {movie.genres.map(g => <li>{g}</li>)}
        </ul>
      </div>)}
    </div>
  );
};

export default Movies;
