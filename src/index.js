import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index.js';

var initialState = {
   userName: null,
   room: null,
   rooms: [],
   messages: []
};

var store = createStore(reducer, initialState);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root'));