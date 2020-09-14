import React from "react";
import { DirectorCard } from "../composant";

function DirectorsList(props) {
  return (
    <div className='container--list'>
      <h1>Réalisateurs</h1>
      <div className='container--movies'>
        {props.directors &&
          props.directors.map((director, i) => {
            return <DirectorCard director={director} />;
          })}
      </div>
    </div>
  );
}

export { DirectorsList };
