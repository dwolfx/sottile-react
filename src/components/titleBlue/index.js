import React, { Component } from 'react';
import { 
  SubTitleWhite, 
  BgBlue, 
  Controller, 
  ContainerDesc, 
  TitleYellow 
} from '../../style/style';

const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')',
  backgroundRepeat: 'repeat',
}
const fixHeight = {
  height: '350px',
  minHeight: 'inherit'
}
const fixMargin = {
  margin: '0'
}
const titleMargin = {
  marginBottom: '30px'
}
export default class TitleBlue extends Component {
  render() {
    return (
      <BgBlue>
        <div style={backgroundStyle}>
          <Controller >
            <ContainerDesc style={fixHeight}>
              <TitleYellow style={titleMargin}>
                {this.props.title}
              </TitleYellow>
              <SubTitleWhite style={fixMargin}>
                {this.props.sub1}
              </SubTitleWhite>
              <SubTitleWhite style={fixMargin}>
                {this.props.sub2}
              </SubTitleWhite>
              <SubTitleWhite style={fixMargin}>
                {this.props.sub3}
              </SubTitleWhite>
              <SubTitleWhite style={fixMargin}>
                {this.props.sub4}
              </SubTitleWhite>
              <SubTitleWhite style={fixMargin}>
                {this.props.sub5}
              </SubTitleWhite>
            </ContainerDesc>
          </Controller>
        </div>
      </BgBlue>
    );
  }
}