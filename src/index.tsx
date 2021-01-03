import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import App from './App';
import reportWebVitals from './reportWebVitals';

moment.locale('pt-br');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(undefined);