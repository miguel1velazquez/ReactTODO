import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './store/reducers/rootReducer';

import "./Global.css";

import App from './App.jsx'
import * as serviceWorker from "./serviceWorker";
serviceWorker.unregister();

const store = createStore(rootReducer, compose(applyMiddleware(logger,thunk)));

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

  