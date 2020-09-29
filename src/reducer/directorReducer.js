import {
  GET_DIRECTORS,
  GET_DIRECTORS_WITH_ID,
  SEARCH_DIRECTOR,
} from "../action";

export const directorReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DIRECTORS:
      return { ...state, directors: action.payload };

    case GET_DIRECTORS_WITH_ID:
      return { ...state, director: action.payload };

    case SEARCH_DIRECTOR:
      return { ...state, research: action.payload };

    default:
      return state;
  }
};
