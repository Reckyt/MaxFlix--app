import React from "react";
import { Link } from "react-router-dom";

import "../css/MovieCard.css";

function MovieCard(props) {
  return (
    <Link className='container--link'>
      <div className='movieCard'>
        <img
          className='movieCard--poster'
          src={props.movie.poster}
          alt='poster'
        />
        <div className='movieCard--info'>
          <span>Titre : {props.movie.title}</span>
          <span>Réalisateur : {props.movie.real}</span>
          <span>Année : {props.movie.year}</span>
        </div>
      </div>
    </Link>
  );
}

export { MovieCard };
