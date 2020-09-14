import { GET_MOVIES, GET_MOVIES_WITH_ID } from "../action";

export const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };

    case GET_MOVIES_WITH_ID:
      return { ...state, movie: action.payload };

    default:
      return state;
  }
};
