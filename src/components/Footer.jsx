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
        <h3 className="footer_text">Todos los Izquierdos Reservados</h3> 
        <div className="spacer"></div>
        <a className="footer_text" href='/'>Terminos de uso</a>
        <div className="spacer"></div>
        <a className="footer_text" href='/'>Declaración de privacidad</a>
        <div className="spacer"></div>
        <a className="footer_text" href='/'>Centro de ayuda</a>
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
