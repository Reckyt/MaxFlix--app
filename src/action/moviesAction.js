import {
  GET_MOVIES,
  GET_MOVIES_WITH_ID,
  DELETE_MOVIE,
  SEARCH_MOVIE,
  UPDATE_MOVIE,
  UPDATE_MOVIE_IN_DATABASE,
} from "./index";

import Axios from "axios";

// --------------------------------- GET ALL MOVIES --------------------------------------------------

export const getMovies = () => (dispatch) => {
  const url = process.env.REACT_APP_GET_ALL_MOVIES;
  Axios.get(url)
    .then((res) => res.data)
    .then((data) => {
      data.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      dispatch({
        type: GET_MOVIES,
        payload: data,
      });
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
};

// --------------------------------- GET MOVIE WITH ID --------------------------------------------------

export const getMovieWithId = (movieId) => (dispatch) => {
  const url = process.env.REACT_APP_GET_MOVIE_WITH_ID;
  Axios.get(url.replace("#movieId#", movieId))
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: GET_MOVIES_WITH_ID,
        payload: data[0],
      });
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
};

// ---------------------------------- SEARCH MOVIE -------------------------------------------------------

export const searchMovie = (filteredMovies) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: filteredMovies,
  });
};

// ---------------------------------- ADD NEW MOVIE -------------------------------------------------------

export const addMovie = (newMovie) => (dispatch) => {
  const url = process.env.REACT_APP_ADD_MOVIE;
  var movieBody = {
    title: newMovie.title,
    year: newMovie.year,
    poster: newMovie.poster,
    link: newMovie.link,
    kind: newMovie.kind,
    synopsis: newMovie.synopsis,
    actors: newMovie.actors,
    director_id_director: newMovie.director_id_director,
  };

  Axios.put(url, movieBody);
};

// ---------------------------------- DELETE DIRECTOR -------------------------------------------------------

export const deleteMovie = (movieId) => (dispatch) => {
  const url = process.env.REACT_APP_DELETE_MOVIE;

  Axios.delete(url.replace("#movieId#", movieId)).then(
    dispatch({
      type: DELETE_MOVIE,
      payload: movieId,
    })
  );
};

// ---------------------------------- UPDATE MOVIE -------------------------------------------------------

export const updateMovieScreen = (targetName, targetValue) => (dispatch) => {
  dispatch({
    type: UPDATE_MOVIE,
    payload: { targetName: targetName, targetValue: targetValue },
  });
};

export const updateMovieDatabase = (
  movieId,
  targetName,
  targetValue,
  movie
) => (dispatch) => {
  let name = targetName;
  let value = targetValue;

  if (movie[name] !== value) {
    const url = process.env.REACT_APP_UPDATE_MOVIE.replace(
      "#movieId#",
      movieId
    );

    var movieBody = {
      id: movieId,
      [name]: value,
    };

    const postInit = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(movieBody),
    };

    Axios.post(url).then(
      dispatch({
        type: UPDATE_MOVIE_IN_DATABASE,
        payload: postInit.body,
      })
    );
  }
};

export const updateMovieScreenAndDatabase = (
  movieId,
  targetName,
  targetValue,
  movie
) => (dispatch) => {
  dispatch(updateMovieScreen(targetName, targetValue));
  dispatch(updateMovieDatabase(movieId, targetName, targetValue, movie));
};
