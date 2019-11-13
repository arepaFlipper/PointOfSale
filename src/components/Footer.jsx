import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Footer.scss';
import Cart from './Cart';

const Footer = (props) => {
  
  return(
    <>
      {props.cart.length > 0 && (<Cart />)}
      
      <footer className='footer'>
      <div className="spacer"></div>
        <h3 className="footer_text">All lefts reserverd</h3> 
        <div className="spacer"></div>
        <a className="footer_text" href='/'>Terms of service</a>
        <div className="spacer"></div>
        <a className="footer_text" href='/'>Privacy Policy</a>
        <div className="spacer"></div>
        <a className="footer_text" href='/'>Help center</a>
        <div className="spacer"></div>
        <a className="footer_text" href='/'>FAQ's</a>

      </footer>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps, null)(Footer);
