import React from 'react';
import { BgWhite, Controller, ContainerDesc, SubTitleBlue, DepoimentContainer } from '../../style/style';
import DepoimentItems from '../_items/depoimentItems'


const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')',
  height: '10%',
  position: 'absolute',
  width: '100%',
  opacity: '0.5'
}
const brokenRules = {
  height: 'auto',
  minHeight: 'calc(85vh - 60px)',
  marginTop: '10%'
}
const img1 = process.env.PUBLIC_URL + '/images/depoiment/img1.png';
const img2 = process.env.PUBLIC_URL + '/images/depoiment/img1.png';
const img3 = process.env.PUBLIC_URL + '/images/depoiment/img1.png';
const img4 = process.env.PUBLIC_URL + '/images/depoiment/img1.png';
const img5 = process.env.PUBLIC_URL + '/images/depoiment/img1.png';
const img6 = process.env.PUBLIC_URL + '/images/depoiment/img1.png';

export default function description() {
  return (
    <BgWhite>
      <div style={backgroundStyle} />
      <Controller>
        <ContainerDesc style={brokenRules}>
          <SubTitleBlue>
            DEPOIMENTOS NOS NOSSOS PARCEIROS E CLIENTES
          </SubTitleBlue>
          <DepoimentContainer>
            <DepoimentItems
              message="O atendimento da empresa como um todo foi impecável. 
              Muito mais ágil, mais prático. A facilidade de lidar no dia a dia,
               a comunicação, foi um baita diferencial. É a terceira vez que faço
                móveis planejados e até hoje eu não tinha tido um atendimento como
                 esse. Foi sensacional, a melhor empresa."
              name="Rodrigo"
              status="Cliente"
              image={img1}
              video="https://www.dropbox.com/s/5x59874yzw6mytc/IMG_3789.MOV?dl=0"
            />
            <DepoimentItems
              message="PENDENTE"
              name="Gabriel"
              status="Cliente?"
              image={img2}
            />
            <DepoimentItems
              message="Quero agradecer a Sottile pela facilidade de pagamento, 
              foi muito tranquilo. Consegui parcelar da forma que eu queria, 
              ajudou bastante. A data de entrega então, nem se fala: com tudo 
              registrado direitinho, aconteceu conforme o previsto. Montagem 
              também nota dez."
              name="Washington"
              status="Cliente"
              image={img3}
              video="https://www.dropbox.com/s/ktnpiokd8r6xg39/IMG_3985.MOV?dl=0"
            />
            <DepoimentItems
              message="A equipe da Sottile nos atendeu muito bem, e gostamos 
              muito do projeto. A montagem foi ótima também. Eu e meu marido 
              estamos bem felizes. O pessoal da empresa está sempre preocupado 
              em nos dar satisfação. Fica aqui meu agradecimento."
              name="Jéssica"
              status="Cliente"
              image={img4}
              video="https://www.instagram.com/p/B7_ecLDgiCv/"
            />
            <DepoimentItems
              message="A experiencia da aquisição dos moveis planejadas da 
              Sottile superou as expectativas! Fomos bem atendimento na 
              elaboração dos projetos, cumpriram os prazos, entregaram o que 
              prometeram, e mesmo com a distancia atenderam na assistência 
              técnica e os últimos reparos. Ficamos contentes com a parceira e 
              recomendamos a empresa aos nossos clientes. Parabéns pela presteza 
              no atendimento num mercado que é tao carente!"
              name="Hidebrair"
              status="Parceiro"
              image={img5}
            />
            <DepoimentItems
              message="Falar da parceria decorado. A Sottile montou o decorado 
              no empreendimento Edifício Coimbra.
              Móveis planejados no preço de custo
              Projeto de interiores
              Especificações dos objetos de decoração"
              name="Alberto"
              status="CLIENTE?"
              image={img6}
            />
          </DepoimentContainer>
        </ContainerDesc>
      </Controller>
    </BgWhite>
  )
}
