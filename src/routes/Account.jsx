import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { getUserWithId } from "../action/userAction";
import { changePage } from "../action/routingAction";

import tagRemove from "../assets/pictures/tagRemove.svg";
import eyeRemove from "../assets/pictures/eyeRemove.svg";

import "../css/Account.css";

function AccountComponent(props) {
  // const idUser = localStorage.getItem("id-user");
  const isLogged = localStorage.getItem("cool-jwt");

  // let userId;
  const name = props.user && props.user.firstname;

  // const propsGetUserWithId = props.getUserWithId;

  // if (props.match.params.id) {
  //   userId = props.match.params.id;
  // } else {
  //   userId = idUser;
  // }
  // console.log(userId);

  // useEffect(() => {
  //   propsGetUserWithId(idUser);
  // }, [propsGetUserWithId, idUser]);

  const handleDeconnect = (dispatch) => {
    localStorage.removeItem("cool-jwt");
    localStorage.removeItem("id-user");
    props.history.push(`/`);
    props.changePage(0);
  };

  if (!isLogged) {
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
  wishList: state.movieReducer.wishList,
  moviesSeen: state.movieReducer.moviesSeen,
});

const mapDispatchToProps = (dispatch) => ({
  getUserWithId: (userId) => dispatch(getUserWithId(userId)),
  changePage: (aInt) => dispatch(changePage(aInt)),
});

const Account = connect(mapStateToProps, mapDispatchToProps)(AccountComponent);

export { Account };
