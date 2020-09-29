import { CHANGE_HEADER } from "./index";

export const changePage = (aBoolean) => (dispatch) => {
  dispatch({
    type: CHANGE_HEADER,
    payload: aBoolean,
  });
};
