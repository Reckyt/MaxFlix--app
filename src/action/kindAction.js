import { GET_KINDS } from "./index";

import Axios from "axios";

// --------------------------------- GET ALL MOVIES --------------------------------------------------

export const getKinds = () => (dispatch) => {
  const url = process.env.REACT_APP_GET_ALL_KINDS;
  Axios.get(url)
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: GET_KINDS,
        payload: data,
      });
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
};
