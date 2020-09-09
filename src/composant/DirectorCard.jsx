import React from "react";
import { Link } from "react-router-dom";

function DirectorCard(props) {
  return (
    <Link className='container--link'>
      <div className='movieCard'>
        <img
          className='movieCard--poster'
          src={props.director.picture}
          alt='portrait'
        />
        <div className='movieCard--info'>
          <span>Nom : {props.director.name}</span>
          <span>Prénom : {props.director.firstname}</span>
        </div>
      </div>
    </Link>
  );
}

export { DirectorCard };
