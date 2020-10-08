import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  getMovieWithId,
  updateMovieScreen,
  updateMovieScreenAndDatabase,
} from "../action/moviesAction";

import "../css/ModifyMovie.css";

function ModifyMovieComponent(props) {
  const movieId = props.match.params.id;
  const movie = props.movie && props.movie;
  const movieToUpdate = props.movieToUpdate && props.movieToUpdate;

  const propsGetMovieWithId = props.getMovieWithId;

  useEffect(() => {
    propsGetMovieWithId(movieId);
  }, [propsGetMovieWithId, movieId]);

  const handleChange = (event) => {
    // console.log(event.target.value);
    props.updateMovieScreen([event.target.name], event.target.value);
  };

  const formatInput = (event) => {
    props.updateMovieScreenAndDatabase(
      movieId,
      event.target.name,
      event.target.value.trim(),
      movie
    );
  };
  console.log(props.directors && props.directors);
  // console.log(movieToUpdate && movieToUpdate.title);

  return (
    <div className='container--modify--movie'>
      <h1>Modifier un film</h1>
      {movieToUpdate && movieToUpdate && (
        <div className='modify--movie'>
          <div className='modify--movie--input'>
            <div className='modify--movie--label'>
              <label>Titre</label>
            </div>
            <input
              name='title'
              value={movieToUpdate.title}
              onChange={handleChange}
              onBlur={formatInput}
            />
          </div>
          <div className='modify--movie--input'>
            <div className='modify--movie--label'>
              <label>Année de sortie</label>
            </div>
            <input
              name='year'
              value={movieToUpdate.year}
              onChange={handleChange}
              onBlur={formatInput}
              type='number'
              min='1900'
              max='2099'
            />
          </div>
          <div className='modify--movie--input'>
            <div className='modify--movie--label'>
              <label>Affiche</label>
            </div>
            <input
              name='poster'
              value={movieToUpdate.poster}
              onChange={handleChange}
              onBlur={formatInput}
            />
          </div>
          <div className='modify--movie--input'>
            <div className='modify--movie--label'>
              <label>Lien</label>
            </div>
            <input
              name='link'
              value={movieToUpdate.link}
              onChange={handleChange}
              onBlur={formatInput}
            />
          </div>
          <div className='modify--movie--input'>
            <div className='modify--movie--label'>
              <label>Genre</label>
            </div>
            <input
              name='kind'
              value={movieToUpdate.kind}
              onChange={handleChange}
              onBlur={formatInput}
            />
          </div>
          <div className='modify--movie--input'>
            <div className='modify--movie--label'>
              <label>Réalisateur</label>
            </div>
            <select
              name='id_director'
              value={movieToUpdate.name}
              onChange={handleChange}
              onBlur={formatInput}>
              {props.directors &&
                props.directors.map((director, i) => {
                  return (
                    <option key={i} value={director.id_director}>
                      {director.name}
                      {director.firstname}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className='modify--movie--input'>
            <div className='modify--movie--label'>
              <label>Acteurs principaux</label>
            </div>
            <input
              name='actors'
              value={movieToUpdate.actors}
              onChange={handleChange}
              onBlur={formatInput}
            />
          </div>
          <div className='modify--movie--input'>
            <div className='modify--movie--label'>
              <label>Synopsis</label>
            </div>
            <textarea
              name='synopsis'
              value={movieToUpdate.synopsis}
              onChange={handleChange}
              onBlur={formatInput}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movieReducer.movie,
  movieToUpdate: state.movieReducer.movieToUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieWithId: (movieId) => dispatch(getMovieWithId(movieId)),
  updateMovieScreen: (targetName, targetValue) =>
    dispatch(updateMovieScreen(targetName, targetValue)),
  updateMovieScreenAndDatabase: (movieId, targetName, targetValue, movie) =>
    dispatch(
      updateMovieScreenAndDatabase(movieId, targetName, targetValue, movie)
    ),
});

const ModifyMovie = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyMovieComponent);

export { ModifyMovie };
