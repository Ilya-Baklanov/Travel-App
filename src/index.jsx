import '@/assets/stylesheets/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import rootReducer from './redux/rootReducer';
import sagaWatcher from './redux/sagas';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(sagaWatcher);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));

export default store;
