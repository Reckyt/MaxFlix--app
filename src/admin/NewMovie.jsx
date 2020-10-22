import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addMovie } from "../action/moviesAction";
import { getKinds } from "../action/kindAction";

import "../css/NewMovie.css";

function NewMovieComponent(props) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    year: "",
    poster: "",
    link: "",
    kind: "",
    synopsis: "",
    actors: "",
    director: "",
  });

  const propsGetKinds = props.getKinds;

  useEffect(() => {
    propsGetKinds();
  }, [propsGetKinds]);

  const handleChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };

  const formatInput = (event) => {
    setNewMovie({
      ...newMovie,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const submit = (event) => {
    event.preventDefault();
    props.addMovie(newMovie);
  };

  function checkNumberFieldLength(event) {
    if (event.target.value.length > 4) {
      event.target.value = event.target.value.slice(0, 4);
    }
  }

  const renderKindList = () => {
    return (
      props.kinds &&
      props.kinds.map((kind, i) => {
        return (
          <div>
            <div className='form--movie--label required'>
              <label>{kind.kind}</label>
            </div>
            <input
              key={i}
              type='checkbox'
              name={kind.kind}
              value={kind.kind}
              className='input--kind'></input>
          </div>
        );
      })
    );
  };

  const renderKindList2 = () => {
    return (
      <div>
        <div className='form--movie--label required'>
          <label>Genres</label>
        </div>
        <select
          className='select--kind'
          multiple
          size='3'
          name='kind'
          value={newMovie.kind}
          onChange={handleChange}
          onBlur={formatInput}
          required>
          {props.kinds &&
            props.kinds.map((kind, i) => {
              return (
                <option key={i} value={kind.id_user} className='option--kind'>
                  {kind.kind}
                </option>
              );
            })}
        </select>
      </div>
    );
  };

  console.log(props.kinds);

  return (
    <form onSubmit={(event) => submit(event)}>
      <div className='container--form--movie'>
        <h1>Ajouter un film</h1>
        <div className='form--movie'>
          <div className='form--movie--input'>
            <div className='form--movie--label required'>
              <label>Titre</label>
            </div>
            <input
              name='title'
              value={newMovie.title}
              onChange={handleChange}
              onBlur={formatInput}
              required
            />
          </div>
          <div className='form--movie--input'>
            <div className='form--movie--label required'>
              <label>Année de sortie</label>
            </div>
            <input
              name='year'
              value={newMovie.year}
              onChange={handleChange}
              onBlur={formatInput}
              onInput={checkNumberFieldLength}
              type='number'
              required
            />
          </div>
          <div className='form--movie--input'>
            <div className='form--movie--label required'>
              <label>Affiche</label>
            </div>
            <input
              name='poster'
              value={newMovie.poster}
              onChange={handleChange}
              onBlur={formatInput}
              required
            />
          </div>
          <div className='form--movie--input'>
            <div className='form--movie--label'>
              <label>Lien</label>
            </div>
            <input
              name='link'
              value={newMovie.link}
              onChange={handleChange}
              onBlur={formatInput}
            />
          </div>
          <div className='form--movie--input--kind'>
            {/*<div className='form--movie--label required'>
              <label>Genre</label>
  </div>*/}
            <div className='container--input--kind'>{renderKindList2()}</div>
          </div>
          <div className='form--movie--input'>
            <div className='form--movie--label required'>
              <label>Réalisateur</label>
            </div>
            <select
              name='director_id_director'
              value={newMovie.director_id_director}
              onChange={handleChange}
              onBlur={formatInput}
              required>
              <option value=''></option>
              {props.directors &&
                props.directors.map((director, i) => {
                  return (
                    <option key={i} value={director.id_director}>
                      {director.name}
                    </option>
                  );
                })}
            </select>
          </div>
          {/*<div className='form--movie--input'>
            <div className='form--movie--label'>
              <label>Acteurs principaux</label>
            </div>
            <input
              name='actors'
              value={newMovie.actors}
              onChange={handleChange}
              onBlur={formatInput}
            />
              </div>*/}
          <div className='form--movie--input'>
            <div className='form--movie--label required'>
              <label>Synopsis</label>
            </div>
            <textarea
              name='synopsis'
              value={newMovie.synopsis}
              onChange={handleChange}
              onBlur={formatInput}
              required
            />
          </div>
        </div>
        <button className='btn--add' type='submit'>
          Ajouter
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => ({
  kinds: state.kindReducer.kinds,
});

const mapDispatchToProps = (dispatch) => ({
  addMovie: (newMovie) => dispatch(addMovie(newMovie)),
  getKinds: () => dispatch(getKinds()),
});
const NewMovie = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMovieComponent);

export { NewMovie };
