import React, { useState } from "react";
import { loginRequest } from "../actions";
import { connect } from "react-redux";
import "../assets/styles/Login.scss";

const Login = (props) => {
  const [form, setValues] = useState({ email: "" });
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  const handleSummit = event => {
    event.preventDefault();
    console.log(form);
    props.loginRequest(form);
    props.history.push('/home');
  };
  return (
    <section className="login">
      <h1> Welcome to POS</h1>
      <section className="login__container">
        <h2>Login</h2>
        <form className="login__container--form" onSubmit={handleSummit}>
          <input
            name='email'
            type="text"
            className="input"
            placeholder="email"
            onChange={handleInput}
          />
          <input
            type="password"
            className="input"
            placeholder="password"
            onChange={handleInput}
          />
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" name="" id="cbox1" value="checkbox" />
              Remember me
            </label>
            <div>
              <button className="button">Login</button>
            </div>
          </div>
          <a href="/">Forgot my password</a>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src="../media/google-icon.png" alt="google" />
            <a href="/"> Login with Google </a>
          </div>
          <div>
            <img src="../media/twitter-icon.png" alt="twitter" />
            <a href="/">Login with twitter</a>
          </div>
        </section>
        <p className="login__container--register">
          Don't u have an account yet? <a href="/">Resgiter here</a>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
