import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './canvas/Checkout';
import Layout from '../components/Layout';
import Dashboard from './canvas/Dashboard';


const Home = () => (
  // <sideDrawer />
  <BrowserRouter>
      <Switch>
        <Layout>
            <Route exact path="/spa" component={Dashboard} />
            <Route exact path="/checkout" component={Checkout} />
        </Layout>
      </Switch>
  </BrowserRouter>

);

export default Home;