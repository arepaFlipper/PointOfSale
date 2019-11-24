import React from 'react';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import '../../assets/styles/components/Dashboard.scss';

const Dashboard = () => (
  <div className="home__container">
    <Categories />
    <Products />
  </div>
);

export default Dashboard;
