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
              message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
              name="Victor"
              status="Desenvolvedor"
              image={img1}
            />
            <DepoimentItems
              message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
              name="Victor"
              status="Desenvolvedor"
              image={img2}
            />
            <DepoimentItems
              message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
              name="Victor"
              status="Desenvolvedor"
              image={img3}
            />
            <DepoimentItems
              message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
              name="Victor"
              status="Desenvolvedor"
              image={img4}
            />
            <DepoimentItems
              message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
              name="Victor"
              status="Desenvolvedor"
              image={img5}
            />
            <DepoimentItems
              message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
              name="Victor"
              status="Desenvolvedor"
              image={img6}
            />
          </DepoimentContainer>
        </ContainerDesc>
      </Controller>
    </BgWhite>
  )
}
