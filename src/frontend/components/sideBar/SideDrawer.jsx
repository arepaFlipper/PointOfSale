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
        < Link to="/home"><div className="item__container"><li>Dashboard</li></div></ Link>
        < Link to="/"><div className="item__container"><li>User Management</li></div></ Link>
        < Link to="/cat"><div className="item__container"><li>Categories</li></div></ Link>
        < Link to="/products"><div className="item__container"><li>Products</li></div></Link>
        < Link to="/"><div className="item__container"><li>Media Content</li></div></ Link>
        < Link to="/"><div className="item__container"><li>Sales</li></div></ Link>
        < Link to="/"><div className="item__container"><li>Sales Report</li></div></ Link>
      </ul>
    </nav>
  );
};

export default connect(null, null)(SideDrawer);
