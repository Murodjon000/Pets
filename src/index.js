import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Router from './Routes/PageRouter';
import './styles/App.scss';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const Main = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<Main />, document.getElementById('root'));
