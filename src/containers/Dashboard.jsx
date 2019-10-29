import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
//import sideDrawer from '../components/sideBar/sideDrawer';
// src/components/sideBar/sideDrawer.jsx
import Layout from '../components/Layout';
import Products from '../components/Products';
import '../../src/assets/styles/components/sideBar/dashboar.scss';


const Home = () => (
  // <sideDrawer />
  <BrowserRouter>
      <Switch>
        <Layout>
          <div className="Dashboard__conrainer">
            <div className="sideDrawer"></div>
            <Route exact path="/home" component={Products} />
            <Route exact path="/checkout" component={Checkout} />
          </div>
        </Layout>
      </Switch>
  </BrowserRouter>


);

export default Home;