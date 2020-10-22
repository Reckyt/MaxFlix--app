import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { getUserWithId } from "../action/userAction";
import { changePage } from "../action/routingAction";

import tagRemove from "../assets/pictures/tagRemove.svg";
import eyeRemove from "../assets/pictures/eyeRemove.svg";

import "../css/Account.css";

function AccountComponent(props) {
  const isLogged = localStorage.getItem("cool-jwt");
  const name = props.user && props.user.firstname;

  const handleDeconnect = (dispatch) => {
    localStorage.removeItem("cool-jwt");
    localStorage.removeItem("id-user");
    props.history.push(`/`);
    props.changePage(0);
  };

  if (!isLogged) {
    return <Redirect to='/signIn' />;
  }

  return (
    <div className='container--account'>
      <div>
        <h1>Bonjour {name}</h1>
      </div>
      <div className='account'>
        <div className='bloc--wanted'>
          <div className='account--bloc'>
            <h2>Liste des films à voir</h2>
            <img className='icon--tag' src={tagRemove} alt='seen' />
          </div>
          <div className='movies--list'>
            {props.wantedMovies &&
              props.wantedMovies.length > 0 &&
              props.wantedMovies.map((movie, i) => {
                return (
                  <ul>
                    <li key={i}>
                      <Link
                        className='movies--link'
                        to={{ pathname: `/movie/${movie.id_movie}` }}>
                        {movie.title}
                      </Link>
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>
        <div className='bloc--seen'>
          <div className='account--bloc'>
            <h2>Liste des films vus</h2>
            <img className='icon--eye' src={eyeRemove} alt='fav' />
          </div>
          <div className='movies--list'>
            {props.seenMovies &&
              props.seenMovies.length > 0 &&
              props.seenMovies.map((movie, i) => {
                return (
                  <ul>
                    <li key={i}>
                      <Link
                        className='movies--link'
                        to={{ pathname: `/movie/${movie.id_movie}` }}>
                        {movie.title}
                      </Link>
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>
        <Link to='/' className='btn--deco'>
          <button className='deco' onClick={() => handleDeconnect()}>
            Déconnexion
          </button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  wantedMovies: state.handleMovieReducer.wantedMovies,
  seenMovies: state.handleMovieReducer.seenMovies,
});

const mapDispatchToProps = (dispatch) => ({
  getUserWithId: (userId) => dispatch(getUserWithId(userId)),
  changePage: (aInt) => dispatch(changePage(aInt)),
});

const Account = connect(mapStateToProps, mapDispatchToProps)(AccountComponent);

export { Account };
