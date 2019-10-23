import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import PropTypes from 'prop-types';
import '../assets/styles/components/Header.scss';
//import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };
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

          {hasUser ?
            <li><a href="">{user.name}</a></li>
            :null
          }
          {hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Logout</a></li>
            :
            <li>
              <Link to='/'>LOGIN</Link>
            </li>
          }


        </ul>
      </div>
    </header>
  );
};

Header.propTypes ={
  //user: PropTypes.string.isRequired,
  logoutRequest: PropTypes.any.isRequired,
};

const mapStateToProps = (state) =>{
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
