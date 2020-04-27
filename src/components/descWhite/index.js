import React from 'react';
import {
  BgWhite,
  ImgBgWhite,
  Controller, 
  ContainerDesc, 
  TitleBlue, 
  SubTitleBlue, 
  BtnContainer
} from '../../style/style';
import BtnDefault from '../_items/btnDefault'


const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')'
}
export default function description() {
  return (
    <BgWhite>
      <ImgBgWhite style={backgroundStyle} />
      <Controller>
        <ContainerDesc>
          <TitleBlue>
            NOSSA CULTURA
          </TitleBlue>
          <SubTitleBlue>
            A Sottile Móveis é uma empresa disruptiva, jovem, 
            empreendedora, antenada em tecnologia e focada na 
            experiência do consumidor, com valores baseados na empatia.
          </SubTitleBlue>
          <BtnContainer>
            <BtnDefault title="VEJA MAIS" />
          </BtnContainer>
        </ContainerDesc>
      </Controller>
    </BgWhite>
  )
}
