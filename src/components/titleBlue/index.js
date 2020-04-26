import React, { Component } from 'react';
import { SubTitleWhite, BgBlue, Controller, ContainerDesc, TitleYellow } from '../../style/style';

const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')',
  backgroundRepeat: 'repeat',
}
const fixHeight = {
  height: '350px',
  minHeight: 'inherit'
}
export default class TitleBlue extends Component {
  render() {
    return (
      <BgBlue>
        <div style={backgroundStyle}>
          <Controller >
            <ContainerDesc style={fixHeight}>
              <TitleYellow>
                {this.props.title}
              </TitleYellow>
              <SubTitleWhite>
                {this.props.sub}
              </SubTitleWhite>
            </ContainerDesc>
          </Controller>
        </div>
      </BgBlue>
    );
  }
}