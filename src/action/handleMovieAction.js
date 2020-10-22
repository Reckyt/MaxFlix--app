import {
  GET_WANTED_MOVIES,
  GET_SEEN_MOVIES,
  ADD_WANTED_MOVIE,
  REMOVE_WANTED_MOVIE,
  SEEN_MOVIE,
  UNSEEN_MOVIE,
} from "./index";

import Axios from "axios";

// --------------------------------- GET ALL MOVIES --------------------------------------------------

export const getWantedMovies = (userId) => (dispatch) => {
  const url = process.env.REACT_APP_GET_WANTED_MOVIES;
  Axios.get(url.replace("#userId#", userId))
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: GET_WANTED_MOVIES,
        payload: data,
      });
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
};

// --------------------------------- GET ALL MOVIES --------------------------------------------------

export const getSeenMovies = (userId) => (dispatch) => {
  const url = process.env.REACT_APP_GET_SEEN_MOVIES;
  Axios.get(url.replace("#userId#", userId))
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: GET_SEEN_MOVIES,
        payload: data,
      });
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
};

// ---------------------------------- ADD WANTED MOVIE -------------------------------------------------------

export const addWantedMovie = (idMovie, idUser) => (dispatch) => {
  const url = process.env.REACT_APP_ADD_MOVIE_IN_WISHLIST;
  var wishListBody = {
    movie_id_movie: idMovie,
    user_id: idUser,
  };

  Axios.put(url, wishListBody).then(
    dispatch({
      type: ADD_WANTED_MOVIE,
      payload: wishListBody,
    })
  );
};

// ---------------------------------- REMOVE WANTED MOVIE -------------------------------------------------------

export const removeWantedMovie = (idMovie, idUser) => (dispatch) => {
  const url = process.env.REACT_APP_REMOVE_MOVIE_IN_WISHLIST;
  var wishListBody = {
    movie_id_movie: idMovie,
    user_id: idUser,
  };

  Axios.post(url.replace("#movieId#", idMovie), {
    data: { wishListBody },
  }).then(
    dispatch({
      type: REMOVE_WANTED_MOVIE,
      payload: idMovie,
    })
  );
};

// ---------------------------------- ADD SEEN MOVIE -------------------------------------------------------

export const seenMovie = (idMovie, idUser) => (dispatch) => {
  const url = process.env.REACT_APP_ADD_MOVIE_IN_SEENLIST;
  var seenListBody = {
    movie_id_movie: idMovie,
    user_id: idUser,
  };

  Axios.put(url, seenListBody).then(
    dispatch({
      type: SEEN_MOVIE,
      payload: seenListBody,
    })
  );
};

// ---------------------------------- REMOVE SEEN MOVIE -------------------------------------------------------

export const unseenMovie = (idMovie, idUser) => (dispatch) => {
  const url = process.env.REACT_APP_REMOVE_MOVIE_IN_SEENLIST;
  var seenListBody = {
    movie_id_movie: idMovie,
    user_id: idUser,
  };

  Axios.post(url.replace("#movieId#", idMovie), {
    data: { seenListBody },
  }).then(
    dispatch({
      type: UNSEEN_MOVIE,
      payload: idMovie,
    })
  );
};
