import React, { Component } from 'react';
import DescriptionBlue from '../../components/descBlue'
import DescriptionWhite from '../../components/descWhite'
import Tour3D from '../../components/tour3d'
import Depoiment from '../../components/depoiment'



export default class Home extends Component {
  render() {
    return (
      <React.StrictMode>
        <DescriptionBlue/>
        <DescriptionWhite/>
        <Tour3D/>
        <Depoiment/>
      </React.StrictMode>
    );
  }
}
