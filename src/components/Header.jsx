import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = (props) => (
    <header className='header'>
      <Link to='/home'>
        <img className='header__img' src='src/assets/static/pos.png' alt='Point Of Sale' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src='src/assets/static/user-icon.png' alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><a href='/'>Cerrar Sesión</a></li>
        </ul>
      </div>
    </header>

  );


export default Header;
