import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Loading } from "../composant";

import { getDirectorWithId } from "../action/directorsAction";

import "../css/Director.css";

function DirectorComponent(props) {
  const directorId = props.match.params.id;

  const propsGetDirectorWithId = props.getDirectorWithId;

  useEffect(() => {
    propsGetDirectorWithId(directorId);
  }, [propsGetDirectorWithId, directorId]);

  const director = props.director && props.director[0];
  console.log(props);

  return (
    <div>
      {props.director && props.director ? (
        <div className='container--director'>
          <div className='imgDirector'>
            <img
              src={director.picture}
              alt='poster'
              className='imgDirector--img'
            />
          </div>
          <div className='container--directorInfo'>
            <div className='directorInfo'>
              <span>{director.name}</span>
              <span>{director.firstname}</span>
              <span>Age : </span>
              <span>Nationnalité : {director.nationality} </span>
              <span>Voir la liste des films réalisés</span>
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
