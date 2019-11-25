import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Spa from '../containers/Spa';
import Login from '../containers/Login';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
// import Register from '../containers/Signup';
// import Checkout from './canvas/Checkout';
// import Dashboard from './canvas/Dashboard';
// import ManagementProd from './canvas/Management_prod';
// import AddProduct from './canvas/AddProduct';
// import UpdateProduct from './canvas/UpdateProduct';
// import ManagementCat from './canvas/Management_cat';

import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/signup" component={Register} />
        <Route exact path="/spa" component={Dashboard} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/products" component={ManagementProd} />
        <Route exact path="/cat" component={ManagementCat} />
        <Route exact path="/add" component={AddProduct} />
        <Route exact path="/edit" component={UpdateProduct} /> */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App; 