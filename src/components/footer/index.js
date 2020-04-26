import React from 'react';
import { Footer, FooterContent, FooterText, FooterIcons, ImgFooter, Controller } from '../../style/style';

const icons = {
  margin: '0 0.5%',
  height: '50px'
}
export default function description() {
  return (
    <Footer>
      <Controller>
        <FooterContent>
          <FooterText>
            <p>Copyright 2020 Sottile Móveis.</p>
            <p>Todos os direitos reservados.</p>
          </FooterText>
          <FooterText>
            <p>Telefone fixo: (11) 5555-2036</p>
            <p>Whatsapp: (11) 98873-6576</p>
          </FooterText>
          <FooterIcons>
          <a target="_blank" href="https://wa.me/5511988736576?text=Gostaria%20de%20conversar%20sobre%20m%C3%B3veis%20planejados%2C%20vim%20pelo%20seu%20site">
            <ImgFooter style={icons} src={process.env.PUBLIC_URL + '/images/wpp.png'} alt='WhatsApp' />
          </a>
          <a target="_blank" href="https://www.instagram.com/sottile.planejados/">
            <ImgFooter style={icons} src={process.env.PUBLIC_URL + '/images/instagram.png'} alt='Instragram' />
          </a>
          <a target="_blank" href="https://www.facebook.com/sottilemoveis10">
            <ImgFooter style={icons} src={process.env.PUBLIC_URL + '/images/facebook.png'} alt='Sottile - 2020' />
          </a>
          </FooterIcons>
        </FooterContent>
      </Controller>
    </Footer>
  )
}
