import React, { Component } from 'react';
import { DepoimentItem } from '../../../style/style';
import './styles.css';

const dep = process.env.PUBLIC_URL + '/images/dep.png';

export default class DepoimentItems extends Component {
  render() {
    return (
      <DepoimentItem>
        <div className="imagem">
          <img src={this.props.image} />
        </div>
        <div className="text">
          <img src={dep}/>
          <div className="content">
            <div className="message">
              <p>
                {this.props.message}
              </p>
            </div>
            <div className="name">
              <p>
                {this.props.name}
              </p>
            </div>
            <div className="status">
              <p>
                {this.props.status}
              </p>
            </div>
          </div>
          <img src={dep}/>
        </div>
        

      </DepoimentItem>
    );
  }
}
