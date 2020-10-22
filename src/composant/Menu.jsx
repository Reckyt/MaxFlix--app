import React from "react";

import "../css/Menu.css";

function Menu({ open, handleKind, handleDecade, kinds, decade }) {
  return (
    <div className={open ? "menu--burger" : "menu--burger--hide"}>
      <span>Options de tri</span>

      <div className='sorting--menu'>
        <span className='sorting--label'>Genres :</span>
        <select onChange={handleKind}>
          <option value=''></option>
          {kinds &&
            kinds.map((kind, i) => {
              return (
                <option key={i} value={kind.kind}>
                  {kind.kind}
                </option>
              );
            })}
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
