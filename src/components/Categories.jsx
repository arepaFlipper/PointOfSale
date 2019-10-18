import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categries = ({ children }) => (
  <div className='Categories'>
    <h3 className='categories__title'>Categorias</h3>
    {children}
  </div>
);

export default Categries;
