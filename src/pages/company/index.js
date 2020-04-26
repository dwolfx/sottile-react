import React, { Component } from 'react';
import TitleBlue from '../../components/titleBlue'
import Massonry from '../../components/massonry'
import { BgBlue } from '../../style/style'
import Contact from '../../components/contact'

const fixHeight = {
  height: '500px'
}

const brok = {
  paddingBottom: '5%'
}
export default class Company extends Component {
  render() {
    return (
      <React.StrictMode>
        <TitleBlue
          title="VOCÊ TEM UM APARTAMENTO NA PLANTA?"
          sub="PARABÉNS PELA CONQUISTA! NÓS PODEMOS AJUDA-LO!"
          style={fixHeight}
        />
        <BgBlue>
          <Massonry
            style={brok}
            title1="OPORTUNIDADE"
            text1="Atendemos a uma demanda preexistente para gerar uma nova 
          receita e, especialmente, melhorar a experiência do comprador do 
          seu imóvel."
            title2="TECNOLOGIA"
            text2="Utilizamos a maior plataforma CRM do mundo, para entregar 
          soluções on demand que possibilitam a gestão online dos principais 
          indicadores de performance do negócio."
            title3="REDUÇÃO DE CUSTOS"
            text3="Oferecemos diversos modelos de parceria, que podem fazer o 
          seu investimento em marcenaria, para apartamentos modelo e área 
          comum dos empreendimentos, chegar a ZERO."
            title4="SHOWROOM VIRTUAL"
            text4="Proporcionamos uma experiência interativa na apresentação dos 
          projetos de cada empreendimento, permitindo a customização dos itens 
          de marcenaria em tempo real."
            title5="GARANTIA DE PERFORMANCE"
            text5="Trabalhamos com a maior fábrica de móveis da América Latina 
          para garantir produção em escala aliada a padrão de qualidade e 
          excelência no acabamento."
          />
          <Contact />
        </BgBlue>
      </React.StrictMode>
    );
  }
}
