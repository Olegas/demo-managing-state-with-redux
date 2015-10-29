import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index.js';
import middleware from './middlewares/serverMiddleware.js';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';

var initialState = {
   userName: null,
   room: null,
   rooms: [],
   messages: [],
   counters: {}
};

var createStoreWithMiddlewares = compose(
   applyMiddleware(middleware),
   devTools(),
   persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

var store = createStoreWithMiddlewares(reducer, initialState);

ReactDOM.render(
   <div>
      <Provider store={store}>
         <App />
      </Provider>
      <DebugPanel top right bottom>
         <DevTools store={store} monitor={SliderMonitor} />
      </DebugPanel>
   </div>,
   document.getElementById('root'));