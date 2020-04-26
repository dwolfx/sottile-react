import React, { Component } from 'react';
import { BgBlue, Tour3d, Controller, ContainerDesc, SubTitleWhite } from '../../style/style';

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
              <Tour3d>
                <SubTitleWhite>
                  NAVEGUE PELO TOUR 3D
                </SubTitleWhite>
                  <iframe
                    width='100%'
                    height='480px' 
                    src='https://www.iteleport.com.br/tour3d/sottile-pontuall/fullscreen/?embedded' 
                    frameborder='0' 
                    allow='vr' 
                    title="iframe"
                    allowfullscreen='allowfullscreen'/>
              </Tour3d>
            </ContainerDesc>
          </Controller>
        </div>
      </BgBlue>
    );
  }
}