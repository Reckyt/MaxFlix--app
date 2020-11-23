import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Loading, IconButton } from "../composant";

import { getMovieWithId } from "../action/moviesAction";
import { changePage } from "../action/routingAction";

import {
  addWantedMovie,
  removeWantedMovie,
  seenMovie,
  unseenMovie,
} from "../action/handleMovieAction";

import {
  styleWantedPageMovie,
  styleSeenPageMovie,
  styleRemoveWantedPageMovie,
  styleRemoveSeenPageMovie,
} from "../utils/style";
import { noPoster } from "../utils/Function";

import play from "../assets/pictures/play.svg";
import tagRemove from "../assets/pictures/tagRemove.svg";
import tagAdd from "../assets/pictures/tagAdd.svg";
import eyeRemove from "../assets/pictures/eyeRemove.svg";
import eyeAdd from "../assets/pictures/eyeAdd.svg";

import "../css/Movie.css";

function MovieComponent(props) {
  const idUser = localStorage.getItem("id-user");
  const isLogged = localStorage.getItem("cool-jwt");
  const movieId = props.match.params.id;
  const movie = props.movie && props.movie;
  const seenMovies = props.seenMovies && props.seenMovies;
  const wantedMovies = props.wantedMovies && props.wantedMovies;
  const propsGetMovieWithId = props.getMovieWithId;

  useEffect(() => {
    propsGetMovieWithId(movieId);
  }, [propsGetMovieWithId, movieId]);

  let wanted = false;
  const renderIfMovieIsWanted = (movie, wantedMovies) => {
    if (wantedMovies && wantedMovies.length > 0) {
      return wantedMovies.find((aMovie) => {
        if (movie) {
          if (aMovie.movie_id_movie === movie.id_movie) {
            return (wanted = true);
          } else {
            return (wanted = false);
          }
        }
      });
    } else {
      return (wanted = false);
    }
  };

  let seen = false;
  const renderIfMovieIsSeen = (movie, seenMovies) => {
    if (seenMovies && seenMovies.length > 0) {
      return seenMovies.find((aMovie) => {
        if (movie) {
          if (aMovie.movie_id_movie === movie.id_movie) {
            return (seen = true);
          } else {
            return (seen = false);
          }
        }
      });
    } else {
      return (seen = false);
    }
  };

  renderIfMovieIsWanted(movie, wantedMovies);
  renderIfMovieIsSeen(movie, seenMovies);

  const renderButtonWantedMovies = () => {
    if (wanted) {
      return (
        <IconButton
          src={tagRemove}
          handleMovie={props.removeWantedMovie}
          movieId={movie.id_movie}
          userId={idUser}
          content={"Retirer des films à voir"}
          style={styleRemoveWantedPageMovie}
        />
      );
    } else {
      return (
        <IconButton
          src={tagAdd}
          handleMovie={props.addWantedMovie}
          movieId={movie.id_movie}
          userId={idUser}
          content={"Ajouter aux film à voir"}
          style={styleWantedPageMovie}
        />
      );
    }
  };

  const renderButtonSeenMovies = () => {
    if (seen) {
      return (
        <IconButton
          src={eyeRemove}
          handleMovie={props.unseenMovie}
          movieId={movie.id_movie}
          userId={idUser}
          content={"Retirer des films Vu"}
          style={styleRemoveSeenPageMovie}
        />
      );
    } else {
      return (
        <IconButton
          src={eyeAdd}
          handleMovie={props.seenMovie}
          movieId={movie.id_movie}
          userId={idUser}
          content={"Ajouter aux films vu"}
          style={styleSeenPageMovie}
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
                  to={{ pathname: `/director/${movie.id_director}` }}
                  onClick={() => props.changePage(2)}>
                  <p className='infoClic'>Voir la fiche du réalisateur</p>
                </Link>
              </span>
              <span>Sortie en : {movie.year} </span>
              <span>Genre : {movie.kind}</span>
              <span>Synopsis :</span>
              <p className='synopsis'>{movie.synopsis}</p>
            </div>
            <div>
              <div className='container--icons'>
                {isLogged && (
                  <div className='icons'>
                    {renderButtonWantedMovies()}
                    {renderButtonSeenMovies()}
                  </div>
                )}
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
  wantedMovies: state.handleMovieReducer.wantedMovies,
  seenMovies: state.handleMovieReducer.seenMovies,
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (aInt) => dispatch(changePage(aInt)),
  getMovieWithId: (movieId) => dispatch(getMovieWithId(movieId)),
  addWantedMovie: (idMovie, idUser) =>
    dispatch(addWantedMovie(idMovie, idUser)),
  removeWantedMovie: (idMovie, idUser) =>
    dispatch(removeWantedMovie(idMovie, idUser)),
  seenMovie: (idMovie, idUser) => dispatch(seenMovie(idMovie, idUser)),
  unseenMovie: (idMovie, idUser) => dispatch(unseenMovie(idMovie, idUser)),
});

const Movie = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);

export { Movie };
