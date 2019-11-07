import React from 'react';
import '../assets/styles/components/Footer.scss';
import Cart from './Cart';
const Footer = () => (
  <>
    <Cart />
    <footer className='footer'>
      <h3>Todos los Izquierdos Reservados</h3> 
      <a href='/'>Terminos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </footer>
  </>
);

export default Footer;
