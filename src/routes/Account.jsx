import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { getUserWithId } from "../action/userAction";
import { ISLOGGED } from "../action/userTypes.js";

import tagRemove from "../assets/pictures/tagRemove.svg";
import eyeRemove from "../assets/pictures/eyeRemove.svg";

import "../css/Account.css";

function AccountComponent(props) {
  // const token = localStorage.getItem("cool-jwt");
  const userId = props.match.params.id;
  const name = props.user && props.user.firstname;

  const propsGetUserWithId = props.getUserWithId;

  useEffect(() => {
    propsGetUserWithId(userId);
  }, [propsGetUserWithId, userId]);

  const handleDeconnect = (dispatch) => {
    props.dispatch({
      type: ISLOGGED,
      payload: true,
    });
    props.history.push(`/`);
  };

  if (props.isLogged === false) {
    return <Redirect to='/signIn' />;
  }

  // const renderSeenMovies = () => {};
  // const renderWishList = () => {};

  return (
    <div className='container--account'>
      <div>
        <h1>Bonjour {name}</h1>
      </div>
      <div className='account'>
        <div className='account--bloc'>
          <h2>Liste des films à voir</h2>
          <img className='icon--tag' src={tagRemove} alt='seen' />
        </div>
        <div className='account--bloc'>
          <h2>Liste des films vus</h2>
          <img className='icon--eye' src={eyeRemove} alt='fav' />
        </div>
        <Link to='/'>
          <button className='btn-deco' onClick={() => handleDeconnect()}>
            Déconnexion
          </button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  isLogged: state.userReducer.isLogged,
  wishList: state.movieReducer.wishList,
  moviesSeen: state.movieReducer.moviesSeen,
});

const mapDispatchToProps = (dispatch) => ({
  getUserWithId: (userId) => dispatch(getUserWithId(userId)),
});

const Account = connect(mapStateToProps, mapDispatchToProps)(AccountComponent);

export { Account };
