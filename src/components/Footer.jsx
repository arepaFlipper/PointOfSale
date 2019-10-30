import React from 'react';
import '../assets/styles/components/Footer.scss';
import Cart from './Cart';
const Footer = () => (
  <>
    <Cart />
    <footer className='footer'>
      <p>Todos los Izquierdos Reservados</p> 
      <a href='/'>Terminos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </footer>
  </>
);

export default Footer;
