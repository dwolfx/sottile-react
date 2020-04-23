import React from 'react';
import { BgWhite, Controller, ContainerDesc, SubTitleBlue, DepoimentContainer } from '../../style/style';
import DepoimentItems from '../_items/depoimentItems'


const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')',
  backgroundRepeat: 'repeat-x',
  backgroundPositionY: '-292%',
}
const brokenRules = {
  height: 'auto',
  minHeight: 'calc(85vh - 60px)'
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
      <div style={backgroundStyle}>
        <Controller>
          <ContainerDesc style={brokenRules}>
            <SubTitleBlue>
              DEPOIMENTOS NOS NOSSOS PARCEIROS E CLIENTES
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
                  image={img1}
                />
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
                  image={img1}
                />
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
                  image={img1}
                />
              </DepoimentContainer>
            </SubTitleBlue>
          </ContainerDesc>
        </Controller>
      </div>
    </BgWhite>
  )
}
