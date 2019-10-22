import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
//import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  return (
    <header className='header'>
      <Link to='/home'>
        <img className='header__img' src='src/assets/static/pos.png' alt='Point Of Sale' />
      </ Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            (<img src={gravatar(user.email)} alt={user.email} />):
            (<img src={'/src/assets/static/user-icon.png'} alt='' />)
          }
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><Link to='/'>Cerrar Sesión</Link></li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) =>{
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps,null)(Header);
