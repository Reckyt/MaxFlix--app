import React from "react";

import "../css/Director.css";

function Director() {
  return (
    <div className='container--director'>
      <div className='imgDirector'>
        <img
          src='https://tse3.mm.bing.net/th?id=OIP.zDj1j_wrbNRI5LZFpLaBagHaKd&pid=Api'
          alt='poster'
          className='imgDirector--img'
        />
      </div>
      <div className='container--directorInfo'>
        <div className='directorInfo'>
          <span>Nom</span>
          <span>Prénom</span>
          <span>Age</span>
          <span>Nationnalité</span>
          <span>Voir la liste des films réalisés</span>
        </div>
      </div>
    </div>
  );
}

export { Director };
