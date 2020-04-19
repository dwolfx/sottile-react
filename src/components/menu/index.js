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
              <MenuText>PROPRIETÁRIOS</MenuText>
              <MenuText>EMPRESAS</MenuText>
              <MenuText>PAGAMENTOS</MenuText>
              <MenuText>BLOG</MenuText>
            </>
            <ImgTitle src={process.env.PUBLIC_URL + '/images/wpp.png'} alt='WhatsApp' />
          </MenuItems>
        </Controller>
      </Header>
    );
  }
}
