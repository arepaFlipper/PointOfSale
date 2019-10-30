import React from 'react';
import Categories from '../components/Categories';
import Products from '../components/Products';
import '../assets/styles/components/Home.scss';

const House = () => (
  <div className="home__container">
    <Categories />
    <Products />
  </div>
  
);

export default House;
