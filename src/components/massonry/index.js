import React, { Component } from 'react';
import { Controller } from '../../style/style'
import './styles.css'

export default class textWhite extends Component {
  render() {
    return (
      <Controller>
        <div className="container">
          <div className="card card1">
            <h1>{this.props.title1}</h1>
            <p>{this.props.text1}</p>
          </div>
          <div className="card card2">
            <h1>{this.props.title2}</h1>
            <p>{this.props.text2}</p>
          </div>
          <div className="card card3">
            <h1>{this.props.title3}</h1>
            <p>{this.props.text3}</p>
          </div>
          <div className="card card4">
            <h1>{this.props.title4}</h1>
            <p>{this.props.text4}</p>
          </div>
          <div className="card card5">
            <h1>{this.props.title5}</h1>
            <p>{this.props.text5}</p>
          </div>
        </div>
      </Controller>
    );
  }
}
