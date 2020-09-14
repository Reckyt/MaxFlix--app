import React from "react";
import { Link } from "react-router-dom";

function DirectorCard(props) {
  return (
    <div className='container--link'>
      <div className='movieCard'>
        <Link to={{ pathname: `/director/${props.director.id_director}` }}>
          <img
            className='movieCard--poster'
            src={props.director.picture}
            alt='portrait'
          />
        </Link>
        <div className='movieCard--info'>
          <span>Nom : {props.director.name}</span>
          <span>Prénom : {props.director.firstname}</span>
          {/*<span>Age : {calculateAge(props.director.date_of_birth)}</span>*/}
        </div>
      </div>
    </div>
  );
}

export { DirectorCard };
