import {
  GET_MOVIES,
  GET_MOVIES_WITH_ID,
  SEARCH_MOVIE,
  UPDATE_MOVIE,
  UPDATE_MOVIE_IN_DATABASE,
} from "../action";

export const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };

    case GET_MOVIES_WITH_ID:
      let mov = action.payload;
      const movieToUpdate = { ...mov };
      return { ...state, movie: action.payload, movieToUpdate: movieToUpdate };

    case SEARCH_MOVIE:
      return { ...state, research: action.payload };

    case UPDATE_MOVIE:
      let movieUpdate = state.movieToUpdate;
      movieUpdate[action.payload.targetName] = action.payload.targetValue;
      state = { ...state, movieToUpdate: movieUpdate };
      return state;

    case UPDATE_MOVIE_IN_DATABASE:
      return { ...state, movie: action.payload };

    default:
      return state;
  }
};
