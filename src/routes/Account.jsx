import React from "react";
import { connect } from "react-redux";

import tagRemove from "../assets/pictures/tagRemove.svg";
import eyeRemove from "../assets/pictures/eyeRemove.svg";

import "../css/Account.css";

function AccountComponent(props) {
  const renderSeenMovies = () => {};
  const renderWishList = () => {};

  return (
    <div className='account'>
      <div className='account--bloc'>
        <h2>Liste des films à voir</h2>
        <img className='icon--tag' src={tagRemove} alt='seen' />
      </div>
      <div className='account--bloc'>
        <h2>Liste des films vus</h2>
        <img className='icon--eye' src={eyeRemove} alt='fav' />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  wishList: state.movieReducer.wishList,
  moviesSeen: state.movieReducer.moviesSeen,
});

const Account = connect(mapStateToProps, null)(AccountComponent);

export { Account };
