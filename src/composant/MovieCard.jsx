import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IconButton } from "./";

import {
  styleWanted,
  styleSeen,
  styleRemoveWanted,
  styleRemoveSeen,
} from "../utils/style";
import { noPoster } from "../utils/Function";

import tagRemove from "../assets/pictures/tagRemove.svg";
import tagAdd from "../assets/pictures/tagAdd.svg";
import eyeRemove from "../assets/pictures/eyeRemove.svg";
import eyeAdd from "../assets/pictures/eyeAdd.svg";

import "../css/MovieCard.css";

function MovieCard(props) {
  const idUser = localStorage.getItem("id-user");
  const isLogged = localStorage.getItem("cool-jwt");

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
          {hover && isLogged ? (
            <div className='movieCard--icon'>
              {props.wanted ? (
                <IconButton
                  src={tagRemove}
                  handleMovie={props.removeWantedMovie}
                  movieId={props.movie.id_movie}
                  userId={idUser}
                  content={"Retirer des films à voir"}
                  style={styleRemoveWanted}
                />
              ) : (
                <IconButton
                  src={tagAdd}
                  handleMovie={props.addWantedMovie}
                  movieId={props.movie.id_movie}
                  userId={idUser}
                  content={"Ajouter aux film à voir"}
                  style={styleWanted}
                />
              )}
              {props.seen ? (
                <IconButton
                  src={eyeRemove}
                  handleMovie={props.unseenMovie}
                  movieId={props.movie.id_movie}
                  userId={idUser}
                  content={"Retirer des films Vu"}
                  style={styleRemoveSeen}
                />
              ) : (
                <IconButton
                  src={eyeAdd}
                  handleMovie={props.seenMovie}
                  movieId={props.movie.id_movie}
                  userId={idUser}
                  content={"Ajouter aux films vu"}
                  style={styleSeen}
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
