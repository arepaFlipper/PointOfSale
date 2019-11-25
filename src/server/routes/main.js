import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';

import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import initialState from '../../frontend/mocks/initialState';

const render = require('../render');

const main = ( req, res, next) => {
  try {
    const store = createStore(reducer, initialState);
    //res.send(render(html, preloadedState));
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={{}}
          >
          <Layout>
            {renderRoutes(Routes)}
          </Layout>
        </StaticRouter>
      </Provider>
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (error) {
    next(err);
  }
}

export default main;