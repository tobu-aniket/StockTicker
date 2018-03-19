import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'

import Layout from './components/Layout';
import StockTicker from './components/StockTicker';
import store from './redux/store';

const newHistory = createBrowserHistory();

function authenticate () {
  return true;
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={newHistory}>
      <Layout>
        <Switch>
          <Route exact path="/" component={StockTicker} />
        </Switch>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root')
);
