import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div>
          <h3>Name: {director.name}</h3>
          {director.movies.map((movie, index) => (
            <li className="movie" key={index}>
              {movie}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Directors
