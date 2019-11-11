import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/Cart.styl';

const Cart = (props) => (
  <footer className='Cart-on'>
    <div className="Cart-on-checkout">
      <Link to="/checkout">
        <div className="Cart-on-alert">
          {props.cart.reduce((accumulate, {amount}) => Math.ceil(accumulate + amount), 0)}
          <i className="fas fa-shopping-cart" />
        </div>
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