import React from "react";
import { Link } from "react-router-dom";

import { noPoster } from "../utils/Function";

import "../css/MovieCard.css";

function MovieCard(props) {
  return (
    <div className='container--link'>
      <div className='movieCard'>
        <Link to={{ pathname: `/movie/${props.movie.id_movie}` }}>
          <img
            className='movieCard--poster'
            src={noPoster(props.movie.poster)}
            alt='poster'
          />
        </Link>
        <div className='movieCard--info'>
          <span>Titre : {props.movie.title}</span>
          <span>Réalisateur : {props.movie.name}</span>
          <span>Année : {props.movie.year}</span>
        </div>
      </div>
    </div>
  );
}

export { MovieCard };
