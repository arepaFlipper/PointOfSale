import React from "react";
import ReactDOM from "react-dom";
import { hydrate } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import App from "./routes/App";
import reducer from "./reducers";
import initialState from './mocks/initialState';

if (typeof window !== 'undefined') {
  let composeEnhancers;
  if (process.env.Node_env === 'production') composeEnhancers = compose;
  else composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadedState, composeEnhancers());
  const history = createBrowserHistory(); 
  const store = createStore(reducer, initialState, composeEnhancers());
  const history = createBrowserHistory();
  
  hydrate(
    <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
  );
}
