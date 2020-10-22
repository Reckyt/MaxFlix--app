import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Loading } from "../composant";

import { getDirectorWithId } from "../action/directorsAction";
import { noImage } from "../utils/Function";

import "../css/Director.css";

function DirectorComponent(props) {
  const directorId = props.match.params.id;

  const propsGetDirectorWithId = props.getDirectorWithId;

  useEffect(() => {
    propsGetDirectorWithId(directorId);
  }, [propsGetDirectorWithId, directorId]);

  const director = props.director && props.director[0];

  const renderMoviesList = () => {
    return props.director.map((movie, i) => {
      return (
        <Link
          key={i}
          className='movie--title'
          to={{ pathname: `/movie/${movie.id_movie}` }}>
          {movie.title}
        </Link>
      );
    });
  };

  return (
    <div>
      {props.director && props.director ? (
        <div className='container--director'>
          <div className='imgDirector'>
            <img
              src={noImage(director.picture)}
              alt='poster'
              className='imgDirector--img'
            />
          </div>
          <div className='container--directorInfo'>
            <div className='directorInfo'>
              <span>
                {director.firstname} {director.name}
              </span>
              <span>Age : </span>
              <span>Nationnalité : {director.nationality} </span>
              <span>Liste des films réalisés :</span>
            </div>
            <div className='director--moviesList'>{renderMoviesList()}</div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  director: state.directorReducer.director,
});

const mapDispatchToProps = (dispatch) => ({
  getDirectorWithId: (directorId) => dispatch(getDirectorWithId(directorId)),
});

const Director = connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectorComponent);

export { Director };
