import {
  GET_DIRECTORS,
  GET_DIRECTORS_WITH_ID,
  SEARCH_DIRECTOR,
  UPDATE_DIRECTOR,
  UPDATE_DIRECTOR_IN_DATABASE,
} from "./index";

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

// ---------------------------------- SEARCH DIRECTOR -------------------------------------------------------

export const searchDirector = (filteredDirectors) => (dispatch) => {
  dispatch({
    type: SEARCH_DIRECTOR,
    payload: filteredDirectors,
  });
};

// ---------------------------------- ADD DIRECTOR -------------------------------------------------------

export const addDirector = (newDirector) => (dispatch) => {
  const url = process.env.REACT_APP_ADD_DIRECTOR;
  var directorBody = {
    name: newDirector.name,
    firstname: newDirector.firstname,
    date_of_birth: newDirector.date_of_birth,
    nationality: newDirector.nationality,
    picture: newDirector.picture,
  };

  Axios.put(url, directorBody);
};

// ---------------------------------- UPDATE DIRECTOR -------------------------------------------------------

export const updateDirectorScreen = (targetName, targetValue) => (dispatch) => {
  dispatch({
    type: UPDATE_DIRECTOR,
    payload: { targetName: targetName, targetValue: targetValue },
  });
};

export const updateDirectorDatabase = (
  directorId,
  targetName,
  targetValue,
  director
) => (dispatch) => {
  let name = targetName;
  let value = targetValue;

  console.log(name);
  console.log(director.targetName, value);

  if (director.targetName !== value) {
    const url = process.env.REACT_APP_UPDATE_DIRECTOR.replace(
      "#directorId#",
      directorId
    );

    var directorBody = {
      id: directorId,
      [name]: value,
    };

    const postInit = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(directorBody),
    };

    Axios.post(url).then(
      dispatch({
        type: UPDATE_DIRECTOR_IN_DATABASE,
        payload: postInit.body,
      })
    );
  }
};
