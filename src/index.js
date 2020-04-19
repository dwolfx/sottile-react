import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Home from './pages/home';
import Menu from './components/menu'
import { Controller } from './style/style.js'

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Controller>
      <Home />
    </Controller>
  </React.StrictMode>,
  document.getElementById('root')
);
