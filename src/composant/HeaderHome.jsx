import React from "react";

import "../css/HeaderHome.css";

function HeaderHome() {
  return (
    <div className='container--header'>
      <div className='headerHome'>
        <div className='headerHome--nav'>
          <a href='/'>
            <div className='websiteName'>MaxFlix</div>
          </a>
          <a href='/moviesList'>
            <div>Films</div>
          </a>
          <a href='/directorsList'>
            <div>Réalisateurs</div>
          </a>
          <a href='/series'>
            <div>Séries</div>
          </a>
        </div>
        <div className='headerHome--searchBar'>
          <input placeholder='Rechercher ici'></input>
        </div>
      </div>
      <div className='lign'> </div>
    </div>
  );
}

export { HeaderHome };
