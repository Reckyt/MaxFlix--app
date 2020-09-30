import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Loading, IconButton } from "../composant";

import {
  getMovieWithId,
  addMovie,
  removeMovie,
  seenMovie,
  unseenMovie,
} from "../action/moviesAction";

import { noPoster } from "../utils/Function";

import "../css/Movie.css";
import play from "../assets/pictures/play.svg";
import tagRemove from "../assets/pictures/tagRemove.svg";
import tagAdd from "../assets/pictures/tagAdd.svg";
import eyeRemove from "../assets/pictures/eyeRemove.svg";
import eyeAdd from "../assets/pictures/eyeAdd.svg";

function MovieComponent(props) {
  const movieId = props.match.params.id;

  let wishList = JSON.parse(localStorage.getItem("wishList"));
  let moviesSeen = JSON.parse(localStorage.getItem("moviesSeen"));
  const propsGetMovieWithId = props.getMovieWithId;

  useEffect(() => {
    propsGetMovieWithId(movieId);
  }, [propsGetMovieWithId, movieId]);

  const movie = props.movie && props.movie[0];
  console.log(wishList);

  const renderButtonToWatch = (movie) => {
    if (wishList && wishList.length > 0) {
      return wishList.map((wantedMovie) => {
        if (wantedMovie.id_movie === movie.id_movie) {
          return (
            <IconButton
              src={tagRemove}
              handleMovie={props.removeMovie}
              movieInfo={movie.id_movie}
            />
          );
        } else {
          return (
            <IconButton
              src={tagAdd}
              handleMovie={props.addMovie}
              movieInfo={movie}
            />
          );
        }
      });
    } else {
      return (
        <IconButton
          src={tagAdd}
          handleMovie={props.addMovie}
          movieInfo={movie}
        />
      );
    }
  };

  const renderButtonSeen = (movie) => {
    if (moviesSeen && moviesSeen.length > 0) {
      return moviesSeen.map((aMovie) => {
        if (aMovie.id_movie === movie.id_movie) {
          return (
            <IconButton
              src={eyeRemove}
              handleMovie={props.unseenMovie}
              movieInfo={movie.id_movie}
            />
          );
        } else {
          return (
            <IconButton
              src={eyeAdd}
              handleMovie={props.seenMovie}
              movieInfo={movie}
            />
          );
        }
      });
    } else {
      return (
        <IconButton
          src={eyeAdd}
          handleMovie={props.seenMovie}
          movieInfo={movie}
        />
      );
    }
  };

  return (
    <div>
      {props.movie && props.movie ? (
        <div className='container--movie'>
          <div className='posterMovie'>
            <img
              src={noPoster(movie.poster)}
              alt='poster'
              className='posterMovie--img'
            />
          </div>
          <div className='container--movieInfo'>
            <div className='movieInfo'>
              <span>Titre : {movie.title}</span>
              <span>
                Réalisateur : {movie.firstname} {movie.name}
                <Link
                  className='director--name'
                  to={{ pathname: `/director/${movie.id_director}` }}>
                  <p className='infoClic'>Voir la fiche du réalisateur</p>
                </Link>
              </span>
              <span>Sortie en : {movie.year} </span>
              <span>Genre : {movie.kind}</span>
              <span>Acteurs principaux :</span>
              <span>Synopsis :</span>
              <p className='synopsis'>{movie.synopsis}</p>
            </div>
            <div>
              <div className='container--icons'>
                <div className='icons'>
                  {renderButtonToWatch(movie)}
                  {renderButtonSeen(movie)}
                </div>
                <Link
                  to={{ pathname: `/player` }}
                  className='container--buttonWatch'>
                  <div className='buttonWatch'>REGARDER</div>
                  <img src={play} alt='play' className='play' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movieReducer.movie,
  // wishList: state.movieReducer.wishList,
  // moviesSeen: state.movieReducer.moviesSeen,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieWithId: (movieId) => dispatch(getMovieWithId(movieId)),
  addMovie: (movie) => dispatch(addMovie(movie)),
  removeMovie: (movieId) => dispatch(removeMovie(movieId)),
  seenMovie: (movie) => dispatch(seenMovie(movie)),
  unseenMovie: (movieId) => dispatch(unseenMovie(movieId)),
});

const Movie = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);

export { Movie };
