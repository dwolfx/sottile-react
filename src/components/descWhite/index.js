import React from 'react';
import { BgWhite, Controller, ContainerDesc, TitleBlue, SubTitleBlue, BtnContainer } from '../../style/style';
import BtnDefault from '../_items/btnDefault'


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
            <TitleBlue>
              NOSSA CULTURA
          </TitleBlue>
            <SubTitleBlue>
              Todas as áreas da Sottile estão alinhadas na mesma cultura, acreditamos e buscamos pessoas do bem para fazer o bem, Nossa missão, os valores,onde vamos chegar... vem com a gente!
          </SubTitleBlue>
            <BtnContainer>
              <BtnDefault title="VEJA MAIS" />
            </BtnContainer>
          </ContainerDesc>
        </Controller>
      </div>
    </BgWhite>
  )
}
