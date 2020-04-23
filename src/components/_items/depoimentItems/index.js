import React, { Component } from 'react';
import { DepoimentItem } from '../../../style/style';
import './styles.css';


export default class DepoimentItems extends Component {
  render() {
    return (
      <DepoimentItem>
        <div className="imagem">
          <img src={this.props.image} />
        </div>
        <div className="text">
          <div className="message">
            {this.props.message}
          </div>
          <div className="name">
            {this.props.name}
          </div>
          <div className="status">
            {this.props.status}
          </div>
        </div>
        

      </DepoimentItem>
    );
  }
}