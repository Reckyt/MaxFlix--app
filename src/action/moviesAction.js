import { GET_MOVIES, GET_MOVIES_WITH_ID } from "./index";

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
