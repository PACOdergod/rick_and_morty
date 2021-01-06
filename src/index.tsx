import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/home_page'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HomePage name="paco"/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
