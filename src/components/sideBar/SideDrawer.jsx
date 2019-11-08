import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/sideBar/SideDrawer.scss'

const SideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show){
    drawerClasses = 'side-drawer open';
  };
  return (
    <nav className={drawerClasses}>
      <ul>
        <div className="item__container"><li><a href="/">Dashboard</a></li></div>
        <div className="item__container"><li><a href="/">User Management</a></li></div>
        <div className="item__container"><li><a href="/">Categories</a></li></div>
        <div className="item__container"><li><a href="/mprods">Products</a></li></div>
        <div className="item__container"><li><a href="/">Media Content</a></li></div>
        <div className="item__container"><li><a href="/">Sales</a></li></div>
        <div className="item__container"><li><a href="/">Sales Report</a></li></div>
      </ul>
    </nav>
  );
};

export default connect(null, null)(SideDrawer);
