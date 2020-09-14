import React from "react";
import { Link } from "react-router-dom";

import "../css/MovieCard.css";

function MovieCard(props) {
  return (
    <div className='container--link'>
      <div className='movieCard'>
        <Link to={{ pathname: `/movie/${props.movie.id_movie}` }}>
          <img
            className='movieCard--poster'
            src={props.movie.poster}
            alt='poster'
          />
        </Link>
        <div className='movieCard--info'>
          <span>Titre : {props.movie.title}</span>
          <span>Réalisateur : {props.movie.real}</span>
          <span>Année : {props.movie.year}</span>
        </div>
      </div>
    </div>
  );
}

export { MovieCard };
