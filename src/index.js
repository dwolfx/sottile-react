import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Home from './pages/home';
import Menu from './components/menu'
import Footer from './components/footer'

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
