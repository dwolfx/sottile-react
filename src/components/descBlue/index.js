import React, { Component } from 'react';
import {
  SubTitleWhite,
  BgBlue,
  Controller,
  ContainerDesc,
  TitleYellow,
  BtnContainer
} from '../../style/style';
import BtnDefault from '../_items/btnDefault'
import { NavLink } from "react-router-dom";

const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')',
  backgroundRepeat: 'repeat',
}
const linkDecoration = {
  textDecoration: "none",
  width: '100%'
}

export default class DescriptionBlue extends Component {
  render() {
    return (
      <BgBlue>
        <div style={backgroundStyle}>
          <Controller>
            <ContainerDesc className="home">
              <TitleYellow>
                MÓVEIS PLANEJADOS PARA
              </TitleYellow>
              <TitleYellow>
                APARTAMENTOS NA PLANTA
              </TitleYellow>
              <SubTitleWhite>
                OTIMIZAMOS TEMPO E CUSTO PARA O COMPRADOR DO IMÓVEL
              </SubTitleWhite>
              <BtnContainer>
                <NavLink to="/proprietario" style={linkDecoration}>
                  <BtnDefault title="PROPRIETÁRIO" />
                </NavLink>
                <NavLink to="/empresa" style={linkDecoration}>
                  <BtnDefault title="EMPRESA" />
                </NavLink>
              </BtnContainer>
            </ContainerDesc>
          </Controller>
        </div>
      </BgBlue >
    );
  }
} 