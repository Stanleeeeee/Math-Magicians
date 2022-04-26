import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CalculatorContainer from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CalculatorContainer />
  </React.StrictMode>,
);
