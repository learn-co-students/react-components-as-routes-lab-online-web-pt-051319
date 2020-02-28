import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map((director, index) => {
          return (
            <div className="director" key={index}>
              <h2>Name: {director.name}</h2>
              <h3>Movies:
                <ul>
                  {director.movies.map((movie, key) => {
                    return (
                    <li key={key}>{movie}</li>
                      )
                    })
                  }
                </ul>
              </h3>
            </div>
            )
          })
        }
    </div>
  );
}

export default Directors