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
const brokenRulesInsta = {
  height: 'auto',
  minHeight: 'calc(85vh - 60px)',
  paddingTop: '15%',
  justifyContent: 'unset'
}
const changeTitleInsta = {
  width: '50%'
}
const img1 = process.env.PUBLIC_URL + '/images/insta/img1.jpg';
const img2 = process.env.PUBLIC_URL + '/images/insta/img2.jpg';
const img3 = process.env.PUBLIC_URL + '/images/insta/img3.jpg';
const img4 = process.env.PUBLIC_URL + '/images/insta/img4.jpg';
const img5 = process.env.PUBLIC_URL + '/images/insta/img5.jpg';
const img6 = process.env.PUBLIC_URL + '/images/insta/img6.jpg';

export default function description() {
  return (
    <BgWhite>
      <div style={backgroundStyle} />
      <Controller>
        <ContainerDesc style={brokenRulesInsta}>
          <SubTitleBlue style={changeTitleInsta}>
            NOS SIGA NO INSTAGRAM! @sottile.planejados
            </SubTitleBlue>
          <InstaContainer>
            <InstaImg src={img1} />
            <InstaImg src={img2} />
            <InstaImg src={img3} />
            <InstaImg src={img4} />
            <InstaImg src={img5} />
            <InstaImg src={img6} />
          </InstaContainer>
        </ContainerDesc>
      </Controller>
    </BgWhite>
  )
}
