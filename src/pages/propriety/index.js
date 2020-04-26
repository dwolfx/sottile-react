import React, { Component } from 'react';
import TitleBlue from '../../components/titleBlue'
import Massonry from '../../components/massonry'
import { BgBlue } from '../../style/style'
import Contact from '../../components/contact'

const fixHeight = {
  height: '500px'
}

const brok = {
  paddingBottom:'5%'
}
export default class Propriety extends Component {
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
          title1="COMPRA PROGRAMADA"
          text1="Aqui na Sottile cada cliente é único e, portanto, 
          possui uma necessidade específica. Com a compra programada, 
          entre outras vantagens, você personaliza todo o seu fluxo de 
          pagamento durante a evolução da obra, evitando juros e reajustes 
          anuais."
          title2="CUSTOS SOB MEDIDA"
          text2="É possível, sim, ter um projeto de bom gosto que cabe no seu 
          bolso. Com a ajuda dos nossos especialistas, você investe de forma 
          inteligente e individualizada, com base nas suas necessidades e no 
          seu orçamento."
          title3="PRATICIDADE"
          text3="Aqui, oferecemos um atendimento online em todas as etapas: 
          definição de projetos, assinatura de documentos, agendamentos de 
          medição, entrega e montagem, além do pós-venda. Usamos a tecnologia 
          para facilitar o seu dia a dia e otimizar o seu tempo."
          title4="EQUIPE ESPECIALIZADA"
          text4="Nossa equipe se destaca pela credibilidade e pelo 
          profissionalismo. Cada projeto tem um arquiteto responsável e a 
          montagem é realizada por um time experiente, com treinamento e 
          certificado Sottile (Montador Nota 10)."
          title5="PADRÃO DE QUALIDADE"
          text5="Trabalhamos com a maior fábrica de móveis da América Latina 
          e utilizamos maquinários de alta tecnologia, para garantir durabilidade 
          e um excelente acabamento no produto que você terá na sua casa"
        />
        </BgBlue>
        <Contact />
      </React.StrictMode>
    );
  }
}
