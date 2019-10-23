import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Cart.styl';

const Cart = (props) => (
  <footer className='Cart'>
        <div className="Cart-checkout">
      <Link to="/checkout">
        <i className="fas fa-shopping-cart" />
      </Link>
      {props.cart.length > 0 &&
        <div className="Cart-alert">{props.cart.length}</div>
      }
    </div>
  </footer>
);

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);