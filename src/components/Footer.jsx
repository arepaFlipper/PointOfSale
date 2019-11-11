import React from 'react';
import '../assets/styles/components/Footer.scss';
import Cart from './Cart';
const Footer = () => (
  <>
    <Cart />
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

export default Footer;
