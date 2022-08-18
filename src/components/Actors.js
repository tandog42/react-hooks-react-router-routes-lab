import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div key={actor.name}>
          <h1>{actor.name}</h1>
          <ul>
            {actor.movies.map(act => (
              <li key={act}>{act}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
