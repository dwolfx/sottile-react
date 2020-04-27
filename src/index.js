import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Home from './pages/home';
import Culture from './pages/culture';
import Propriety from './pages/propriety';
import Company from './pages/company';
import Menu from './components/menu'
import Footer from './components/footer'
import ScrollToTop from './components/_items/scroll.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Menu />
      <Switch>
        <ScrollToTop>
          <Route path="/" exact component={Home} />
          <Route path="/cultura" component={Culture} />
          <Route path="/proprietario" component={Propriety} />
          <Route path="/empresa" component={Company} />
          <Redirect to="/" />
        </ScrollToTop>
      </Switch>
    <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
