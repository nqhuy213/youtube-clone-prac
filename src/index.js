import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store } from './redux/reduxStore'
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);
serviceWorker.register()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
