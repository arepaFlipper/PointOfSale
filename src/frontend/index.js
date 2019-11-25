import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import App from "./routes/App";
import reducer from "./reducers";
import initialState from './mocks/initialState';

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

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
