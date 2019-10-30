import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideDrawer from './sideBar/SideDrawer';
import '../assets/styles/components/coomponents/Checkout.styl';
import '../assets/styles/components/sideBar/Dashboard.scss';

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    <div className="Dashboard__conrainer">
    <SideDrawer />
    {children}
    </div>

    <Footer />
  </div>
);

export default Layout;