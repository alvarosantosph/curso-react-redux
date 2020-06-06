import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from './main/calculator/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<React.StrictMode>
  <div>
    <h1>Calculadora</h1>
  </div>
  <Calculadora />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
