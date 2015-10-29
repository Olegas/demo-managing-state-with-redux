import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index.js';
import middleware from './middlewares/serverMiddleware.js';

var initialState = {
   userName: null,
   room: null,
   rooms: [],
   messages: [],
   counters: {
      'Общий': 2
   }
};

var createStoreWithMiddlewares = compose(
   applyMiddleware(middleware)
)(createStore);

var store = createStoreWithMiddlewares(reducer, initialState);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root'));