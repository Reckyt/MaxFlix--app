import { CHANGE_HEADER, SHOW_ASIDE_MENU } from "./index";

// ---------------------------- CHANGE PAGE --------------------------------------------------

export const changePage = (aInt) => (dispatch) => {
  dispatch({
    type: CHANGE_HEADER,
    payload: aInt,
  });
};

// ---------------------------- SHOW ASIDE MENU --------------------------------------------------

export const showAsideMenu = (aBoolean) => (dispatch) => {
  dispatch({
    type: SHOW_ASIDE_MENU,
    payload: aBoolean,
  });
};
