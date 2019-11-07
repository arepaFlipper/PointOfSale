import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideDrawer from './sideBar/SideDrawer';
import '../assets/styles/components/coomponents/Layout.styl';
import '../assets/styles/components/sideBar/Dashboard.scss';

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    <div className="Dashboard__container">
      <SideDrawer />
      <div className="canvas">
        {children}
      </div>
    </div>

    <Footer />
  </div>
);

export default Layout;