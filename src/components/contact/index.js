import React from 'react';
import { BgWhite, Controller, ContainerDesc, SubTitleBlue, InstaContainer, InstaImg } from '../../style/style';
import DepoimentItems from '../_items/depoimentItems'


const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')',
  height: '15%',
  position: 'absolute',
  width: '100%',
  opacity: '0.5'
}

export default function description() {
  return (
    <BgWhite>
      <div style={backgroundStyle} />
      <Controller>
        <ContainerDesc>
          <SubTitleBlue>
            CONTATO
            </SubTitleBlue>
          <InstaContainer>
          </InstaContainer>
        </ContainerDesc>
      </Controller>
    </BgWhite>
  )
}
