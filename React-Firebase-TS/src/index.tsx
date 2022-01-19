import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

