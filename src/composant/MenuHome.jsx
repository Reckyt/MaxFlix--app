import React from "react";
import { Link } from "react-router-dom";

import "../css/MenuHome.css";

function MenuHome({ open, handleMenu, caseId }) {
  return (
    <div className={open ? "menu--burger--responsive" : "menu--burger--hide"}>
      <Link
        to='/moviesList'
        className={caseId === 1 ? "selected" : null}
        onClick={() => handleMenu(1, false)}>
        Films
      </Link>
      <Link
        to='/directorsList'
        className={caseId === 2 ? "selected" : null}
        onClick={() => handleMenu(2, false)}>
        Réalisateurs
      </Link>
    </div>
  );
}

export { MenuHome };
