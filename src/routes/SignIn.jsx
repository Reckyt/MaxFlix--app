import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/SignIn.css";

function SignIn() {
  const [user, setUser] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <div className='form--connexion'>
      <h1>Connexion</h1>
      <div className='form--connexion--input'>
        <div className='form--connexion--label'>
          <label>Email</label>
        </div>
        <input
          onChange={handleChange}
          name='mail'
          value={user.mail}
          type='mail'
          required
        />
      </div>
      <div className='form--connexion--input'>
        <div className='form--connexion--label'>
          <label>Password</label>
        </div>
        <input
          onChange={handleChange}
          name='password'
          value={user.mail}
          requiredtype='password'
        />
      </div>
      <Link to={{ pathname: "/signUp" }} className='link--inscription'>
        Pas de compte? S'inscrire
      </Link>
      <button className='btn--signin' type='submit'>
        Se connecter
      </button>
    </div>
  );
}

export { SignIn };
