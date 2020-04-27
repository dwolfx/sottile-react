import React, { Component } from 'react';
import TitleBlue from '../../components/titleBlue'
import TextWhite from '../../components/_items/textWhite'
import { BgWhite } from '../../style/style'

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
          title="NOSSO PROPÓSITO"
          sub1="Ajudar pessoas a construírem os seus lares."
          sub2="Gerar oportunidades de emprego."
          sub3="Melhorar a qualidade de vida dos nossos stakeholders."
          sub4="Facilitar a tomada de decisão de quem precisa mobiliar um imóvel."
          sub5="Oferecer capacitação profissional"
          style={fixHeight}
        />
        <BgWhite style={brok}>
          <TextWhite
            title="NOSSOS VALORES"
            destacado="Get it done (Agir):"
            text="Somos realizadores! Estamos sempre dispostos a fazer o que é 
            preciso, da melhor forma possível. Agimos de maneira rápida e 
            trabalhamos com muita energia. Preferimos aprender fazendo sem ter 
            medo de errar. Evitamos burocracia e nos questionamos sobre o modo 
            como as coisas são feitas. Gostamos de ser práticos. 
            Nossas ações são orientadas para oferecer uma experiência de compra 
            agradável em todas as etapas do nosso relacionamento. Nossa equipe 
            nunca se omite. Somos problem solvers."
          />
          <TextWhite
            destacado="Win Together (Somar):"
            text="Empatia é um dos conceitos que estão no DNA da nossa empresa. 
            Toda a equipe atua comprometida em fazer o bem e dar o seu melhor 
            em prol do coletivo, que vem à frente dos interesses individuais. 
            Somos amigáveis, colaborativos e atentos às necessidades uns dos 
            outros. Aqui, todos os envolvidos têm voz e enfrentam os desafios 
            com senso de justiça e igualdade."
          />
          <TextWhite
            destacado="Enjoy the ride (Agradecer):"
            text="Mais importante do que o destino, é a caminhada e quem nos 
            acompanha nesse percurso, por isso somos gratos por todas as 
            oportunidades. Trabalhamos sempre com brilho nos olhos e otimismo, 
            esperando que o melhor prevaleça. Esse entusiasmo é facilmente 
            identificado na atuação da nossa empresa."
          />
          <TextWhite
            title="MISSÃO"
            sub="(AONDE QUEREMOS CHEGAR)"
            text="Tornar-se a maior referência no Brasil em móveis planejados 
            para proprietários de apartamentos novos. Mobiliar e transformar o 
            lar dos brasileiros por meio de uma excelente experiência de compra, 
            com atendimento diferenciado, inovação e tecnologia de ponta."
          />
        </BgWhite>
      </React.StrictMode>
    );
  }
}
