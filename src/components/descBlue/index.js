import React, { Component } from 'react';
import { SubTitleWhite, BgBlue, Controller, ContainerDesc, TitleYellow, BtnContainer } from '../../style/style';
import BtnDefault from '../btnDefault'

const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url('+trilha+')',
  backgroundRepeat: 'repeat',
}

export default class DescriptionBlue extends Component {
  render() {
    return (
      <BgBlue>
        <div style={backgroundStyle}>
        <Controller>
          <ContainerDesc>
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
              <BtnDefault title="PROPRIETÁRIO" />
              <BtnDefault title="EMPRESA" />
            </BtnContainer>
          </ContainerDesc>
        </Controller>
        </div>
      </BgBlue>
    );
  }
}