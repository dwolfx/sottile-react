import React, { Component } from 'react';
import { BtnYellow, TextBtnYellow } from '../../../style/style';
// import { Container } from './styles';


export default class BtnDefault extends Component {
  render() {
    return (
        <BtnYellow>
          <TextBtnYellow>
          {this.props.title}
          </TextBtnYellow>
        </BtnYellow>
      );
    }
  }