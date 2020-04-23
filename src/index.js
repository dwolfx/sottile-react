import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Home from './pages/home';
import Menu from './components/menu'

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
