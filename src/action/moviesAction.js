import {
  GET_MOVIES,
  GET_MOVIES_WITH_ID,
  SEARCH_MOVIE,
  ADD_MOVIE,
  REMOVE_MOVIE,
  SEEN_MOVIE,
  UNSEEN_MOVIE,
} from "./index";

import Axios from "axios";

// --------------------------------- GET ALL MOVIES --------------------------------------------------

export const getMovies = () => (dispatch) => {
  const url = process.env.REACT_APP_GET_ALL_MOVIES;
  Axios.get(url)
    .then((res) => res.data)
    .then((data) => {
      data.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      dispatch({
        type: GET_MOVIES,
        payload: data,
      });
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
};

// --------------------------------- GET MOVIE WITH ID --------------------------------------------------

export const getMovieWithId = (movieId) => (dispatch) => {
  const url = process.env.REACT_APP_GET_MOVIE_WITH_ID;
  Axios.get(url.replace("#movieId#", movieId))
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: GET_MOVIES_WITH_ID,
        payload: data,
      });
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
};

// ---------------------------------- SEARCH MOVIE -------------------------------------------------------

export const searchMovie = (filteredMovies) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: filteredMovies,
  });
};

// ---------------------------------- ADD MOVIE -------------------------------------------------------

export const addMovie = (movie) => (dispatch) => {
  dispatch({
    type: ADD_MOVIE,
    payload: movie,
  });
};

// ---------------------------------- REMOVE MOVIE -------------------------------------------------------

export const removeMovie = (movieId) => (dispatch) => {
  dispatch({
    type: REMOVE_MOVIE,
    payload: movieId,
  });
};

// ---------------------------------- SEEN MOVIE -------------------------------------------------------

export const seenMovie = (movie) => (dispatch) => {
  dispatch({
    type: SEEN_MOVIE,
    payload: movie,
  });
};

// ---------------------------------- UNSEEN MOVIE -------------------------------------------------------

export const unseenMovie = (movieId) => (dispatch) => {
  dispatch({
    type: UNSEEN_MOVIE,
    payload: movieId,
  });
};
