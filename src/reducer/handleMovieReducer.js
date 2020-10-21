import {
  GET_WANTED_MOVIES,
  GET_SEEN_MOVIES,
  ADD_WANTED_MOVIE,
  REMOVE_WANTED_MOVIE,
  SEEN_MOVIE,
  UNSEEN_MOVIE,
} from "../action";

export const handleMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_WANTED_MOVIES:
      return { ...state, wantedMovies: action.payload };

    case GET_SEEN_MOVIES:
      return { ...state, seenMovies: action.payload };

    case ADD_WANTED_MOVIE:
      let wishList = state.wantedMovies;
      if (wishList) {
        wishList = [...wishList, action.payload];
      } else {
        wishList = [];
        wishList.push(action.payload);
      }
      return { ...state, wantedMovies: wishList };

    case REMOVE_WANTED_MOVIE:
      let oldWishList = state.wantedMovies;
      let newWishList = oldWishList.filter(
        (movie) => movie.movie_id_movie !== action.payload
      );
      return { ...state, wantedMovies: newWishList };

    case SEEN_MOVIE:
      let seenList = state.seenMovies;
      if (seenList) {
        seenList = [...seenList, action.payload];
      } else {
        seenList = [];
        seenList.push(action.payload);
      }
      return { ...state, seenMovies: seenList };

    case UNSEEN_MOVIE:
      let oldSeenList = state.seenMovies;
      let newSeenList = oldSeenList.filter(
        (movie) => movie.movie_id_movie !== action.payload
      );
      return { ...state, seenMovies: newSeenList };

    default:
      return state;
  }
};
