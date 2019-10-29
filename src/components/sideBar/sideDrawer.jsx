import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './sideDrawer.scss';

const sideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show){
    drawerClasses = 'side-drawer open';
  };
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/">User Management</a></li>
        <li><a href="/">Categories</a></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">Media Content</a></li>
        <li><a href="/">Sales</a></li>
        <li><a href="/">Sales Report</a></li>
      </ul>
    </nav>
  );
};


export default connect(null, null)(sideDrawer);
