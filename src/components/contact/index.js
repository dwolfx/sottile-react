import React from 'react';
import { BgWhite, Controller, ContainerDesc, SubTitleBlue, InstaContainer, InstaImg } from '../../style/style';
import DepoimentItems from '../_items/depoimentItems'


const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')',
  backgroundRepeat: 'repeat-x',
  backgroundPositionY: '-300%',
}

export default function description() {
  return (
    <BgWhite>
      <div style={backgroundStyle}>
        <Controller>
          <ContainerDesc>
            <SubTitleBlue>
              CONTATO
            </SubTitleBlue>
            <InstaContainer>
            </InstaContainer>
          </ContainerDesc>
        </Controller>
      </div>
    </BgWhite>
  )
}
