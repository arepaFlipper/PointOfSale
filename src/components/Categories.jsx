import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categries = ({ children }) => (
  <div className='Categories'>
    <h3 className='categories__title'>Mi lista</h3>
    {children}
  </div>
);

export default Categries;
