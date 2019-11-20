import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSummit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  }
  return (
    <section className='register'>
      <section className='register__container'>
        <h2>
            Sign Up
        </h2>
        <form className='register__container--form' onSubmit={handleSummit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Name'
            onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='email'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='password'
            onChange={handleInput}
          />
          <div className="register__container--form__button">
          <button className='button'>
              Sign in
          </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default connect(null, null)(Register);
