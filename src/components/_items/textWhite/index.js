import React, { Component } from 'react';
import './styles.css';
import { Controller } from '../../../style/style'

export default class textWhite extends Component {
  render() {
    return (
      <Controller>
        <div className="text-white">
          <div className={"title" + (typeof this.props.title != 'undefined' ? '' : ' hidden') }>
            <h1>{this.props.title}</h1>
            <h3>{this.props.sub}</h3>
          </div>
          <div className="content">
            <p><strong>{this.props.destacado}</strong> {this.props.text} </p>
          </div>
        </div>
      </Controller>
    );
  }
}
