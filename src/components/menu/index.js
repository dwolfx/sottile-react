import React, { Component } from 'react';
import { Header, Controller, ImgTitle, MenuItems, MenuText } from '../../style/style.js';
import { Link } from "react-router-dom";


const link = {
  color: '#fff',
  textDecoration: 'none'
}
const menuFix = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}
const logoImg = {
  maxWidth: '170px',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
}
export default class Menu extends Component {
  render() {
    return (
      <Header>
        <Controller>
          <MenuItems>
            <div style={logoImg}>
              <ImgTitle src={process.env.PUBLIC_URL + '/images/sottile-logo.png'} alt='Sottile - 2020' />
            </div>
            <div className="victor" style={menuFix}>
              <Link to="/" style={link}>
                <MenuText Link="/" className="active">HOME</MenuText>
              </Link>
              <Link to="/cultura" style={link}>
                <MenuText >NOSSA CULTURA</MenuText>
              </Link>
              <Link to="/proprietario" style={link}>
                <MenuText>PROPRIETÁRIO</MenuText>
              </Link>
              <Link to="/empresa" style={link}>
                <MenuText>EMPRESA</MenuText>
              </Link>
            </div>
            <a target="_blank" href="https://wa.me/5511988736576?text=Gostaria%20de%20conversar%20sobre%20m%C3%B3veis%20planejados%2C%20vim%20pelo%20seu%20site" rel="noopener noreferrer">
              <ImgTitle src={process.env.PUBLIC_URL + '/images/wpp.png'} alt='WhatsApp' />
            </a>
          </MenuItems>
        </Controller>
      </Header>
    );
  }
}
