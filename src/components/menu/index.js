import React, { Component } from 'react';
import { Header, Controller, ImgTitle, MenuItems, MenuText } from '../../style/style.js';

export default class Menu extends Component {
  render() {
    return (
      <Header>
        <Controller>
          <MenuItems>
            <ImgTitle src={process.env.PUBLIC_URL + '/images/sottile-logo.png'} alt='Sottile - 2020' />
            <>
              <MenuText className="active">HOME</MenuText>
              <MenuText>NOSSA CULTURA</MenuText>
              <MenuText>PROPRIETÁRIO</MenuText>
              <MenuText>EMPRESA</MenuText>
              <MenuText>PAGAMENTOS</MenuText>
              {/* <MenuText>BLOG</MenuText> */}
            </>
            <a target="_blank" href="https://wa.me/5511988736576?text=Gostaria%20de%20conversar%20sobre%20m%C3%B3veis%20planejados%2C%20vim%20pelo%20seu%20site">
              <ImgTitle src={process.env.PUBLIC_URL + '/images/wpp.png'} alt='WhatsApp' />
            </a>
          </MenuItems>
        </Controller>
      </Header>
    );
  }
}
