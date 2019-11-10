import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Cart.scss';

const Cart = (props) => (
  <footer className='Cart-on'>
    <div className="Cart-on-checkout">
      {props.cart.length > 0 &&
        <div className="Cart-on-alert">{props.cart.length}</div>
      }
      <Link to="/checkout">
        <i className="fas fa-shopping-cart" />
      </Link>
    </div>
  </footer>
);

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);