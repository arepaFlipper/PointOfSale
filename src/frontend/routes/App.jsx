import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../containers/Login';

import Home from '../containers/Home';
import Register from '../containers/Signup';
import NotFound from '../containers/NotFound';

import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/Home" component={Home} />
        <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

export default App;