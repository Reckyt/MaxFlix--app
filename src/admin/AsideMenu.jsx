import React from "react";
import { Link } from "react-router-dom";

import "../css/AsideMenu.css";

function AsideMenu() {
  return (
    <div className='aside--menu'>
      <Link className='button--menu' to={{ pathname: `/admin/new-movie` }}>
        <div>Ajouter un film </div>
      </Link>
      <Link className='button--menu' to={{ pathname: `/admin/new-director` }}>
        <div>Ajouter un réalisateur</div>
      </Link>
      <Link className='button--menu' to={{ pathname: `/admin/movies-items` }}>
        <div>Afficher tous les films</div>
      </Link>
      <Link
        className='button--menu'
        to={{ pathname: `/admin/directors-items` }}>
        <div>Afficher tous les réalisateurs</div>
      </Link>
    </div>
  );
}

export { AsideMenu };
