import React, { useState } from 'react';

const Login = () => {
  const [form, setValues] = useState({email: ''});
  const handleInput = (event) => {
    setValues({
        ...form,
        [event.target.name]: event.target.value,
    })
  };
  const handleSummit = (event) => {
      event.preventDefault();
      console.log(form);
  }
  return (
        <section className="login">
            <h1> Welcome to POS</h1>
            <section className="login__container">
                <h2>Login</h2>
                <form
                 className="login__container--form"
                 onSubmit={handleSummit}
                >
                    <input
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
                    <button className="button">Login</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input
                             type="checkbox"
                             name=""
                             id="cbox1"
                             value="checkbox"
                            /> 
                         Remember me
                        </label>
                        <a href="/">forgot my password</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div>
                        <img src="../media/google-icon.png" alt="google" />
                        <a href="/"> Iniciar sesión con Google </a>
                    </div>
                    <div>
                        <img src="../media/twitter-icon.png" alt="twitter" />
                        <a href="/">Iniciar sesión con twitter</a>
                    </div>
                </section>
                <p className="login__container--register">No tienes Cuenta? 
                    <a href="/">Registrate</a>
                </p>
            </section>
        </section>
  );
};

export default Login;
