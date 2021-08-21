import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {compose,createStore,applyMiddleware} from "redux";
import thunk from  "redux-thunk";
import './scss/app.scss';
import {Provider} from "react-redux";
import App from './App';
import { rootReducer } from './redux/reducers/rootReducer';

const store =createStore(rootReducer,compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <App/>
      </Router>
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);