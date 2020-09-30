import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../action/userAction";
import "../css/SignIn.css";

function SignInComponent(props) {
  const [userInfo, setUserInfo] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    props.login(userInfo);
    if (props.userInfo) {
      props.history.push(`/account/${props.userInfo.userData[0].id}`);
    }
  };
  // console.log(props.isLogged);

  return (
    <form onSubmit={(event) => submit(event)}>
      <div className='form--connexion'>
        <h1>Connexion</h1>
        <div className='form--connexion--input'>
          <div className='form--connexion--label'>
            <label>Email</label>
          </div>
          <input
            onChange={handleChange}
            name='mail'
            value={userInfo.mail}
            type='mail'
            required
            placeholder='example@example.com'
          />
        </div>
        <div className='form--connexion--input'>
          <div className='form--connexion--label'>
            <label>Password</label>
          </div>
          <input
            onChange={handleChange}
            name='password'
            value={userInfo.password}
            type='password'
            required
            placeholder='*****'
          />
        </div>
        <Link to={{ pathname: "/signUp" }} className='link--inscription'>
          Pas de compte? S'inscrire
        </Link>
        {/*<Link to='account'>*/}
        <button className='btn--signin' type='submit'>
          Se connecter
        </button>
        {/*</Link>*/}
      </div>
    </form>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userReducer.userInfo,
  isLogged: state.userReducer.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userInfo) => dispatch(login(userInfo)),
});

const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInComponent);

export { SignIn };
