import React from "react";
import { Link } from "react-router-dom";

function DirectorCard(props) {
  return (
    <div className='container--link'>
      <div className='movieCard'>
        <Link to={{ pathname: `/director` }}>
          <img
            className='movieCard--poster'
            src={props.director.picture}
            alt='portrait'
          />
        </Link>
        <div className='movieCard--info'>
          <span>Nom : {props.director.name}</span>
          <span>Prénom : {props.director.firstname}</span>
        </div>
      </div>
    </div>
  );
}

export { DirectorCard };
