import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './canvas/Checkout';
import Layout from '../components/Layout';
import Dashboard from './canvas/Dashboard';
import ProdManager from './canvas/prodManager';

const Home = () => (
  // <sideDrawer />
  <BrowserRouter>
      <Switch>
        <Layout>
            <Route exact path="/spa" component={Dashboard} />
            <Route exact path="/checkout" component={Checkout} />
            {/* <Route exact path="/mprods" component={prodManager} /> */}
        </Layout>
      </Switch>
  </BrowserRouter>

);

export default Home;