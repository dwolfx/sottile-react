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
import { NavLink } from "react-router-dom";


const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')'
}
const linkDecoration = {
  textDecoration: 'none',
  width: '100%'
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
            <NavLink to="/proprietario" style={linkDecoration}>
              <BtnDefault title="VEJA MAIS" />
            </NavLink>
          </BtnContainer>
        </ContainerDesc>
      </Controller>
    </BgWhite>
  )
}
