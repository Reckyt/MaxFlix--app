import { LOGIN, GET_USER_WITH_ID, ISLOGGED } from "./index";

import axios from "axios";

// ---------------------------- NEW USER --------------------------------------------------

export const addUser = (newUser) => (dispatch) => {
  const url = process.env.REACT_APP_CREATE_NEW_USER;
  var user = {
    lastname: newUser.lastname,
    firstname: newUser.firstname,
    mail: newUser.mail,
    password: newUser.password,
    admin: false,
  };

  axios.post(url, user);
};

// ----------------------------  LOGIN --------------------------------------------------

export const login = (userInfo) => (dispatch) => {
  const url = process.env.REACT_APP_USER_LOGIN;
  var login = {
    mail: userInfo.mail,
    password: userInfo.password,
  };

  axios
    .post(url, login)
    .then((res) => {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
      localStorage.setItem("cool-jwt", res.data.token);
      localStorage.setItem("id-user", res.data.userData[0].id);
    })
    .catch((err) => alert("combinaison mail & mot de passe incorrect :( !!"));
};

// --------------------------------- GET USER WITH ID --------------------------------------------------

export const getUserWithId = (userId) => (dispatch) => {
  const url = process.env.REACT_APP_GET_USER_WITH_ID;
  axios
    .get(url.replace("#userId#", userId))
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: GET_USER_WITH_ID,
        payload: data.results[0],
      });
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
};
