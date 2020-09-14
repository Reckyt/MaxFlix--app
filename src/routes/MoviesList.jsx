import React from "react";

import { MovieCard } from "../composant";

import "../css/MoviesList.css";

function MoviesList(props) {
  return (
    <div className='container--list'>
      <h1>Films</h1>
      <div className='container--movies'>
        {props.movies &&
          props.movies.map((movie, i) => {
            return <MovieCard key={i} movie={movie} />;
          })}
      </div>
    </div>
  );
}

export { MoviesList };
