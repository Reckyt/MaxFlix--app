import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Loading } from "../composant";

import { getMovieWithId } from "../action/moviesAction";

import "../css/Movie.css";
import play from "../assets/pictures/play.png";

function MovieComponent(props) {
  const movieId = props.match.params.id;

  const propsGetMovieWithId = props.getMovieWithId;

  useEffect(() => {
    propsGetMovieWithId(movieId);
  }, [propsGetMovieWithId, movieId]);

  const movie = props.movie && props.movie[0];

  return (
    <div>
      {props.movie && props.movie ? (
        <div className='container--movie'>
          <div className='posterMovie'>
            <img src={movie.poster} alt='poster' className='posterMovie--img' />
          </div>
          <div className='container--movieInfo'>
            <div className='movieInfo'>
              <span>{movie.title}</span>
              <span>Réalisateur</span>
              <span>Sortie en : {movie.year} </span>
              <span>Genre : {movie.kind}</span>
              <span>Acteurs principaux :</span>
              <span>synopsis :</span>
              <p>{movie.synopsis}</p>
            </div>
            <Link
              to={{ pathname: `/player` }}
              className='container--buttonWatch'>
              <div className='buttonWatch'>REGARDER</div>
              <img src={play} alt='play' className='play' />
            </Link>
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
});

const mapDispatchToProps = (dispatch) => ({
  getMovieWithId: (movieId) => dispatch(getMovieWithId(movieId)),
});

const Movie = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);

export { Movie };
