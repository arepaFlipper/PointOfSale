import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../containers/Login';





import NotFound from '../containers/NotFound';

import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

export default App;