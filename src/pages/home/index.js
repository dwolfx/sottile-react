import React, { Component } from 'react';
import { Header } from './style';



export default class Home extends Component {
  render() {
    return (
      <Header>
        <img src={process.env.PUBLIC_URL + '/images/sottile-logo.png'} alt='Sottile - 2020' />
        <h1>Teste</h1>
      </Header>
    );
  }
}
