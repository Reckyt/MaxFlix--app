import React, { useState } from "react";
import { connect } from "react-redux";

import { addDirector } from "../action/directorsAction";

import "../css/NewMovie.css";

function NewDirectorComponent(props) {
  const [newDirector, setNewDirector] = useState({
    name: "",
    firstname: "",
    date_of_birth: "",
    nationality: "",
    picture: "",
  });

  const handleChange = (event) => {
    setNewDirector({ ...newDirector, [event.target.name]: event.target.value });
  };
  const submit = (event) => {
    event.preventDefault();
    props.addDirector(newDirector);
  };
  console.log(newDirector.date_of_birth);

  return (
    <form onSubmit={(event) => submit(event)}>
      <div className='container--form--movie'>
        <h1>Ajouter un réalisateur</h1>
        <div className='form--movie'>
          <div className='form--movie--input'>
            <div className='form--movie--label required'>
              <label>Nom</label>
            </div>
            <input
              onChange={handleChange}
              name='name'
              value={newDirector.name}
              required
            />
          </div>
          <div className='form--movie--input'>
            <div className='form--movie--label required'>
              <label>Prénom</label>
            </div>
            <input
              onChange={handleChange}
              name='firstname'
              value={newDirector.firstname}
              required
            />
          </div>
          <div className='form--movie--input'>
            <div className='form--movie--label required'>
              <label>Date de naissance</label>
            </div>
            <input
              onChange={handleChange}
              name='date_of_birth'
              type='date'
              value={newDirector.date_of_birth}
              required
            />
          </div>
          <div className='form--movie--input'>
            <div className='form--movie--label required'>
              <label>Nationnalité</label>
            </div>
            <input
              onChange={handleChange}
              name='nationality'
              value={newDirector.nationality}
              required
            />
          </div>
          <div className='form--movie--input'>
            <div className='form--movie--label required'>
              <label>Photo</label>
            </div>
            <input
              onChange={handleChange}
              name='picture'
              type='text'
              value={newDirector.picture}
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

const mapDispatchToProps = (dispatch) => ({
  addDirector: (newDirector) => dispatch(addDirector(newDirector)),
});
const NewDirector = connect(null, mapDispatchToProps)(NewDirectorComponent);

export { NewDirector };
