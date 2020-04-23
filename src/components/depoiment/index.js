import React from 'react';
import { BgWhite, Controller, ContainerDesc, SubTitleBlue } from '../../style/style';
import DepoimentItems from '../_items/depoimentItems'


const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')',
  backgroundRepeat: 'repeat-x',
  backgroundPositionY: '-292%',
}
export default function description() {
  return (
    <BgWhite>
      <div style={backgroundStyle}>
        <Controller>
          <ContainerDesc>
            <SubTitleBlue>
              DEPOIMENTOS NOS NOSSOS PARCEIROS E CLIENTES
              <div>
                <DepoimentItems
                  message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
                  name="Victor"
                  status="Desenvolvedor"
                />
                <DepoimentItems
                  message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
                  name="Victor"
                  status="Desenvolvedor"
                />
                <DepoimentItems
                  message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
                  name="Victor"
                  status="Desenvolvedor"
                />
                <DepoimentItems
                  message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
                  name="Victor"
                  status="Desenvolvedor"
                />
                <DepoimentItems
                  message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
                  name="Victor"
                  status="Desenvolvedor"
                />
                <DepoimentItems
                  message="Um nume parum explit ped ma simet ipsapit exerorr orehendam faccumquae volupta temolore illabo. Ique arioreperum quas"
                  name="Victor"
                  status="Desenvolvedor"
                />
              </div>
            </SubTitleBlue>
          </ContainerDesc>
        </Controller>
      </div>
    </BgWhite>
  )
}
