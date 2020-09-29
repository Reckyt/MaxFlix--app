import React, { useState } from "react";
import { Link } from "react-router-dom";

import { noPoster } from "../utils/Function";
import tagRemove from "../assets/pictures/tagRemove.svg";
import tagAdd from "../assets/pictures/tagAdd.svg";
import eyeRemove from "../assets/pictures/eyeRemove.svg";
import eyeAdd from "../assets/pictures/eyeAdd.svg";

import "../css/MovieCard.css";
import { IconButton } from "./";

function MovieCard(props) {
  const [hover, setHover] = useState(false);

  const showOverlay = () => {
    setHover(true);
  };
  const hideOverlay = () => {
    setHover(false);
  };

  return (
    <div className='container--link'>
      <div className='movieCard'>
        <div
          className='movieCard--img'
          onMouseEnter={showOverlay}
          onMouseLeave={hideOverlay}>
          <Link to={{ pathname: `/movie/${props.movie.id_movie}` }}>
            <img
              className='movieCard--poster'
              src={noPoster(props.movie.poster)}
              alt='poster'
            />
          </Link>
          {hover ? (
            <div className='movieCard--icon'>
              {props.wanted ? (
                <IconButton
                  src={tagRemove}
                  handleMovie={props.removeMovie}
                  movieInfo={props.movie.id_movie}
                />
              ) : (
                <IconButton
                  src={tagAdd}
                  handleMovie={props.addMovie}
                  movieInfo={props.movie}
                />
              )}
              {props.seen ? (
                <IconButton
                  src={eyeRemove}
                  handleMovie={props.unseenMovie}
                  movieInfo={props.movie.id_movie}
                />
              ) : (
                <IconButton
                  src={eyeAdd}
                  handleMovie={props.seenMovie}
                  movieInfo={props.movie}
                />
              )}
            </div>
          ) : null}
        </div>
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
