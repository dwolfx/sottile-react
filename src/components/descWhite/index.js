import React from 'react';
import { BgWhite, Controller, ContainerDesc, TitleBlue, SubTitleBlue, BtnContainer } from '../../style/style';
import BtnDefault from '../_items/btnDefault'


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
          <TitleBlue>
            NOSSA CULTURA
          </TitleBlue>
          <SubTitleBlue>
          A Sottile Móveis é uma empresa disruptiva, jovem, empreendedora, 
          antenada em tecnologia e focada na experiência do consumidor, com 
          valores baseados na empatia
          </SubTitleBlue>
          <BtnContainer>
            <BtnDefault title="VEJA MAIS" />
          </BtnContainer>
        </ContainerDesc>
      </Controller>
    </BgWhite>
  )
}
