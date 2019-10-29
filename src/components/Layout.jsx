import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import SideDrawer from './sideBar/SideDrawer';
import '../styles/components/Layout.styl';
import '../assets/styles/components/sideBar/Dashboard.scss';

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    <div className="Dashboard__conrainer">
    <SideDrawer />
      {/* <div className="sideDrawer"></div> */}
    {children}
    </div>
    <Cart />
    <Footer />
  </div>
);

export default Layout;