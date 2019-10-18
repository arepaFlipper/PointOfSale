import React from 'react';
import Login from '../components/Login';
import Products from '../components/Products'
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className ='App'>
    <Header />
    <Categories>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </ Categories>
    <Categories>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </ Categories>
    <Footer/>

  </div>
  
);

export default App;