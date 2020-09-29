import {
  GET_MOVIES,
  GET_MOVIES_WITH_ID,
  SEARCH_MOVIE,
  ADD_MOVIE,
  REMOVE_MOVIE,
  SEEN_MOVIE,
  UNSEEN_MOVIE,
} from "../action";

export const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };

    case GET_MOVIES_WITH_ID:
      return { ...state, movie: action.payload };

    case SEARCH_MOVIE:
      return { ...state, research: action.payload };

    case ADD_MOVIE:
      let wishList = JSON.parse(localStorage.getItem("wishList"));
      if (wishList) {
        wishList = [...wishList, action.payload];
      } else {
        wishList = [];
        wishList.push(action.payload);
      }
      localStorage.setItem("wishList", JSON.stringify(wishList));
      return { ...state, wishList: wishList };

    case REMOVE_MOVIE:
      let oldWishList = JSON.parse(localStorage.getItem("wishList"));
      let newWishList = oldWishList.filter(
        (movie) => movie.id_movie !== action.payload
      );
      localStorage.setItem("wishList", JSON.stringify(newWishList));
      return { ...state, wishList: newWishList };

    case SEEN_MOVIE:
      let moviesSeen = JSON.parse(localStorage.getItem("moviesSeen"));
      if (moviesSeen) {
        moviesSeen = [...moviesSeen, action.payload];
      } else {
        moviesSeen = [];
        moviesSeen.push(action.payload);
      }
      localStorage.setItem("moviesSeen", JSON.stringify(moviesSeen));
      return { ...state, moviesSeen: action.payload };

    case UNSEEN_MOVIE:
      let oldMoviesSeen = JSON.parse(localStorage.getItem("moviesSeen"));
      let newMoviesSeen = oldMoviesSeen.filter(
        (movie) => movie.id_movie !== action.payload
      );
      localStorage.setItem("moviesSeen", JSON.stringify(newMoviesSeen));
      return { ...state, moviesSeen: newMoviesSeen };

    default:
      return state;
  }
};
