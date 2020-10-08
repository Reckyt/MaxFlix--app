import { CHANGE_HEADER } from "./index";

export const changePage = (aInt) => (dispatch) => {
  dispatch({
    type: CHANGE_HEADER,
    payload: aInt,
  });
};
