import { GET_DIRECTORS, GET_DIRECTORS_WITH_ID } from "./index";

import Axios from "axios";

// --------------------------------- GET ALL DIRECTORS --------------------------------------------------

export const getDirectors = () => (dispatch) => {
  const url = process.env.REACT_APP_GET_ALL_DIRECTORS;
  Axios.get(url)
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: GET_DIRECTORS,
        payload: data,
      });
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
};

// --------------------------------- GET DIRECTOR WITH ID --------------------------------------------------

export const getDirectorWithId = (directorId) => (dispatch) => {
  const url = process.env.REACT_APP_GET_DIRECTOR_WITH_ID;
  Axios.get(url.replace("#directorId#", directorId))
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: GET_DIRECTORS_WITH_ID,
        payload: data,
      });
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
};
