import React from "react";
import { Link } from "react-router-dom";

import "../css/Movie.css";
import play from "../assets/pictures/play.png";

function Movie() {
  return (
    <div className='container--movie'>
      <div className='posterMovie'>
        <img
          src='https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg'
          alt='poster'
          className='posterMovie--img'
        />
      </div>
      <div className='container--movieInfo'>
        <div className='movieInfo'>
          <span>Titre du film</span>
          <span>Réalisateur</span>
          <span>Sortie en </span>
          <span>Nationnalité</span>
          <span>Acteurs principaux :</span>
          <span>synopsis :</span>
          <p></p>
        </div>
        <Link to={{ pathname: `/` }} className='container--buttonWatch'>
          <div className='buttonWatch'>REGARDER</div>
          <img src={play} alt='play' className='play' />
        </Link>
      </div>
    </div>
  );
}

export { Movie };
