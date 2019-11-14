import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './canvas/Checkout';
import Layout from '../components/Layout';
import Dashboard from './canvas/Dashboard';
import ManagementProd from './canvas/Management_prod';
import AddProduct from './canvas/AddProduct';
import ManagementCat from './canvas/Management_cat';

const Home = () => (
  <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/spa" component={Dashboard} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/products" component={ManagementProd} />
            <Route exact path="/cat" component={ManagementCat} />
            <Route exact path="/add" component={AddProduct} />
          </Switch>
        </Layout>
  </BrowserRouter>

);

export default Home;