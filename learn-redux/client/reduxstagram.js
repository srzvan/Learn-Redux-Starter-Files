import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import store, { history } from './store';

import css from './styles/style.styl';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

const mountPoint = document.getElementById('root');
render(router, mountPoint);
