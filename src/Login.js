import React from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase.js";
function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //when we click on the login button our form submits and when there is some submitting there is reloading of page but we don't want that for that we use preventDefault
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history("/"))
      .catch((error) => alert(error.message));
    //firebase login is going to take below
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
    // do firebase register
  };
  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt=""
        />
      </NavLink>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            className="login__signInButton"
            type="submit"
          >
            Sign-In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's fake clone Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Noties and our
          interest Based Ads Notice.
        </p>
        <button
          onClick={register}
          className="login__registerButton"
          type="submit"
        >
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
