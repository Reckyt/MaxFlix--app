import React from "react";
import { Link } from "react-router-dom";

import { noImage } from "../utils/Function";

import "../css/DirectorCard.css";

function DirectorCard(props) {
  return (
    <div className='container--link'>
      <div className='directorCard'>
        <Link to={{ pathname: `/director/${props.director.id_director}` }}>
          <img
            className='directorCard--poster'
            src={noImage(props.director.picture)}
            alt='portrait'
          />

          <div className='directorCard--info'>
            <span>{props.director.firstname}</span>
            <span>{props.director.name}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export { DirectorCard };
