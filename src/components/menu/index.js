import React, { Component } from 'react';
import {
  Header,
  Controller,
  ImgTitle,
  MenuItemsDesk,
  MenuItemsMobile,
  MenuText,
  FooterIcons,
  ImgFooter
} from '../../style/style.js';
import { Link } from "react-router-dom";
import './styles.css'


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
const imgMenu = {
  width: '42px',
}
const menuLogo = {

}
const menuMobile = {
  width: '100vw',
  position: 'fixed',
  height: 'calc(100vh - 65px)',
  zIndex: '15',
  backgroundColor: '#005884',
  top: '65px',
  left: '0',
  display: 'none'
}
const menuClose = {
  height: 'auto',
  position: 'absolute',
  left: '10px',
  width: '42px',
  top: '-55px',
}
const icons = {
  margin: '0 0.5%',
  height: '50px'
}
const mediaIcons = {
  position: 'absolute',
  width: '100%',
  bottom: '10px',
  justifyContent: 'space-around'
}
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false,
    };
  }
  render() {
    return (
      <Header>
        <Controller>
          <MenuItemsDesk className="desktop">
            <div style={logoImg}>
              <ImgTitle src={process.env.PUBLIC_URL + '/images/sottile-logo.png'} alt='Sottile - 2020' />
            </div>
            <div style={menuFix}>
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
          </MenuItemsDesk>
          <MenuItemsMobile className="mobile">
            <div style={menuLogo} onClick={() => this.setState({ active: !this.state.active })} >
              <ImgTitle style={imgMenu} src={process.env.PUBLIC_URL + '/images/menu.png'} alt='Menu' />
            </div>
            <div style={logoImg}>
              <ImgTitle src={process.env.PUBLIC_URL + '/images/sottile-logo.png'} alt='Sottile - 2020' />
            </div>
            <div style={menuMobile} className={this.state.active && 'active'}>
              <ImgTitle style={menuClose} onClick={() => this.setState({ active: !this.state.active })} src={process.env.PUBLIC_URL + '/images/closeM.png'} alt='Fechar' />
              <Link to="/" style={link}>
                <MenuText Link="/" onClick={() => this.setState({ active: !this.state.active })} className="active">HOME</MenuText>
              </Link>
              <Link to="/cultura" onClick={() => this.setState({ active: !this.state.active })} style={link}>
                <MenuText >NOSSA CULTURA</MenuText>
              </Link>
              <Link to="/proprietario" onClick={() => this.setState({ active: !this.state.active })} style={link}>
                <MenuText>PROPRIETÁRIO</MenuText>
              </Link>
              <Link to="/empresa" onClick={() => this.setState({ active: !this.state.active })} style={link}>
                <MenuText>EMPRESA</MenuText>
              </Link>
              <FooterIcons style={mediaIcons}>
                <a target="_blank" href="https://wa.me/5511988736576?text=Gostaria%20de%20conversar%20sobre%20m%C3%B3veis%20planejados%2C%20vim%20pelo%20seu%20site" rel="noopener noreferrer">
                  <ImgFooter style={icons} src={process.env.PUBLIC_URL + '/images/wpp.png'} alt='WhatsApp' />
                </a>
                <a target="_blank" href="https://www.instagram.com/sottile.planejados/" rel="noopener noreferrer">
                  <ImgFooter style={icons} src={process.env.PUBLIC_URL + '/images/instagram.png'} alt='Instragram' />
                </a>
                <a target="_blank" href="https://www.facebook.com/sottilemoveis10" rel="noopener noreferrer">
                  <ImgFooter style={icons} src={process.env.PUBLIC_URL + '/images/facebook.png'} alt='Sottile - 2020' />
                </a>
              </FooterIcons>
            </div>
            <a
              target="_blank"
              style={imgMenu}
              href="https://wa.me/5511988736576?text=Gostaria
              %20de%20conversar%20sobre%20m%C3%B3veis%20
              planejados%2C%20vim%20pelo%20seu%20site"
              rel="noopener noreferrer"
            >
              <ImgTitle src={process.env.PUBLIC_URL + '/images/wpp.png'} alt='WhatsApp' />
            </a>
          </MenuItemsMobile>
        </Controller>
      </Header>
    );
  }
}
