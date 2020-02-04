import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map((actor, index) => {
          return (
            <div className="actor" key={index}>
              <h2>Name: {actor.name}</h2>
              <h3>Movies:
                <ul>
                  {actor.movies.map((movie, key) => {
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
    )
}

export default Actors;
