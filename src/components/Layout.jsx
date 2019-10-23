import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import '../styles/components/Layout.styl';

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    {children}
    <Cart />
    <Footer />
  </div>
);

export default Layout;