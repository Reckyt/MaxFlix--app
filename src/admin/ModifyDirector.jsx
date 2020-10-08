import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  getDirectorWithId,
  updateDirectorScreen,
  updateDirectorDatabase,
} from "../action/directorsAction";

import { convertDateToPrint } from "../utils/Function";

import "../css/ModifyDirector.css";

function ModifyDirectorComponent(props) {
  const directorId = props.match.params.id;
  const director = props.director && props.director[0];
  const directorToUpdate = props.directorToUpdate && props.directorToUpdate[0];
  const propsGetDirectorWithId = props.getDirectorWithId;

  useEffect(() => {
    propsGetDirectorWithId(directorId);
  }, [propsGetDirectorWithId, directorId]);

  const handleChange = (event) => {
    props.updateDirectorScreen([event.target.name], event.target.value);
  };

  const formatInput = (event) => {
    props.updateDirectorDatabase(
      directorId,
      event.target.name,
      event.target.value.trim(),
      director
    );
  };

  return (
    <div className='container--modify--director'>
      <h1>Modifier un réalisateur</h1>
      {directorToUpdate && directorToUpdate && (
        <div className='modify--director'>
          <div className='modify--director--input'>
            <div className='modify--director--label '>
              <label>Nom</label>
            </div>
            <input
              name='lastname'
              value={directorToUpdate.name}
              onChange={handleChange}
              onBlur={formatInput}
            />
          </div>
          <div className='modify--director--input'>
            <div className='modify--director--label '>
              <label>Prénom</label>
            </div>
            <input
              name='firstname'
              value={directorToUpdate.firstname}
              onChange={handleChange}
              onBlur={formatInput}
            />
          </div>
          <div className='modify--director--input'>
            <div className='modify--director--label '>
              <label>Date de naissance</label>
            </div>
            <input
              // type='date'
              name='date_of_birth'
              value={convertDateToPrint(directorToUpdate.date_of_birth)}
              onChange={handleChange}
              onBlur={formatInput}
            />
          </div>
          <div className='modify--director--input'>
            <div className='modify--director--label'>
              <label>Nationnalité</label>
            </div>
            <input
              name='nationality'
              value={directorToUpdate.nationality}
              onChange={handleChange}
              onBlur={formatInput}
            />
          </div>
          <div className='modify--director--input'>
            <div className='modify--director--label'>
              <label>Photo</label>
            </div>
            <input
              name='picutre'
              value={directorToUpdate.picture}
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
  director: state.directorReducer.director,
  directorToUpdate: state.directorReducer.directorToUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  getDirectorWithId: (directorId) => dispatch(getDirectorWithId(directorId)),
  updateDirectorScreen: (targetName, targetValue) =>
    dispatch(updateDirectorScreen(targetName, targetValue)),
  updateDirectorDatabase: (directorId, targetName, targetValue, director) =>
    dispatch(
      updateDirectorDatabase(directorId, targetName, targetValue, director)
    ),
});

const ModifyDirector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyDirectorComponent);

export { ModifyDirector };
