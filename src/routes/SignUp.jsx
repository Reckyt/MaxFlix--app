import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/SignUp.css";

function SignUp() {
  const [newUser, setNewUser] = useState({
    lastname: "",
    firstname: "",
    mail: "",
    password: "",
  });

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  return (
    <div className='form--inscription'>
      <h1>Inscription</h1>
      <div className='form--input'>
        <div className='form--label'>
          <label>Nom</label>
        </div>
        <input
          onChange={handleChange}
          name='lastname'
          value={newUser.lastname}
          required
        />
      </div>
      <div className='form--input'>
        <div className='form--label'>
          <label>Prénom</label>
        </div>
        <input
          onChange={handleChange}
          name='firstname'
          value={newUser.firstname}
          required
        />
      </div>
      <div className='form--input'>
        <div className='form--label'>
          <label>Email</label>
        </div>
        <input
          onChange={handleChange}
          name='mail'
          value={newUser.mail}
          required
        />
      </div>
      <div className='form--input'>
        <div className='form--label'>
          <label>Password</label>
        </div>
        <input
          onChange={handleChange}
          name='password'
          value={newUser.password}
          required
          type='password'
        />
      </div>
      <Link to={{ pathname: "/signIn" }} className='link--connection'>
        Déjà un compte? Se connecter
      </Link>
      <button className='btn--signup' type='submit'>
        S'inscrire
      </button>
    </div>
  );
}

export { SignUp };
