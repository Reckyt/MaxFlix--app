import React from "react";

import "../css/Menu.css";

function Menu({ open, handleKind, handleDecade, kind, decade }) {
  return (
    <div className={open ? "menu--burger" : "menu--burger--hide"}>
      <span>Options de tri</span>

      <div className='sorting--menu'>
        <span className='sorting--label'>Genres :</span>
        <select onChange={handleKind} value={kind}>
          <option value=''></option>
          <option value='science-fiction'>Science-fiction</option>
          <option value='drame'>Drame</option>
          <option value='thriller'>Thriller</option>
          <option value='comédie'>Comédie</option>
          <option value='horreur'>Horreur</option>
          <option value='fantastique'>Fantastique</option>
        </select>
      </div>
      <div className='sorting--menu'>
        <span className='sorting--label'>Décennie :</span>
        <select onChange={handleDecade} value={decade}>
          <option value=''></option>
          <option value='1950'>1950</option>
          <option value='1960'>1960</option>
          <option value='1970'>1970</option>
          <option value='1980'>1980</option>
          <option value='1990'>1990</option>
          <option value='2000'>2000</option>
          <option value='2010'>2010</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
}

export { Menu };
