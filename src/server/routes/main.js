import React from 'react';
import { renderToString } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'react-redux';
import { staticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';

import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import initialState from '../../frontend/mocks/initialState';
import render from '../render';

const preloadedState = store.getState();
res.send(render(html, preloadedState));

const main = ( req, res, next) => {
  try {
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider>
        <staticRouter
          location={req.url}
          context={{}}
          >
          <Layout>
            {renderRoutes(Routes)}
          </Layout>
        </staticRouter>
      </Provider>
    );
    res.send(render(html));
  } catch (error) {
    next(err);
  }
}

export default main;