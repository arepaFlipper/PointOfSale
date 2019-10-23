import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../containers/Login';
import Products from '../components/Products'
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import Home from '../containers/Home';
import Register from '../containers/Signup';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';

import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;