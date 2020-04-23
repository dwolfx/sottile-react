import React, { Component } from 'react';
import { SubTitleWhite, BgBlue, Controller, ContainerDesc, TitleYellow, BtnContainer } from '../../style/style';

const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')',
  backgroundRepeat: 'repeat',
}

export default class DescriptionBlue extends Component {
  render() {
    return (
      <BgBlue>
        <div style={backgroundStyle}>
          <Controller>
            <ContainerDesc>
              
            </ContainerDesc>
          </Controller>
        </div>
      </BgBlue>
    );
  }
}