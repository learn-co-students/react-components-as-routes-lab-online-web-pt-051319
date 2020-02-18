import React from 'react';
import { actors } from '../data';

const Actors = () => {
	const actorMap = actors.map(actor => {
		return (
			<div>
				<h2>{ actor.name }</h2>
				<ul>
					{ actor.movies.map(movie => <li>{ movie })</li>) }
				</ul>
			</div>
		)
	})
  return (
    <div>
    	<h1>Actors Page</h1>
      { actorMap }
    </div>
  );
};

export default Actors;