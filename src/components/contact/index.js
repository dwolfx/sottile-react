import React from 'react';
import { BgWhite, Controller, FormContact, FormContent, FormSubmit, ContainerDesc, SubTitleBlue} from '../../style/style';

const trilha = process.env.PUBLIC_URL + '/images/trilha.png';
const backgroundStyle = {
  backgroundImage: 'url(' + trilha + ')',
  height: '15%',
  position: 'absolute',
  width: '100%',
  opacity: '0.5'
}
const inputData = {
  height: '40px',
  borderRadius: '5px',
  margin: '10px 0',
  border: '1px solid #00436C',
  padding: '5px',
}
const textArea = {
  ...inputData,
  width: '100%',
  height: '100%',
  fontSize: '0.9rem',
  fontFamily: 'Helvetica, Arial, sans-serif'
}
const btnSubmit = {
  ...inputData,
  width: '20%',
  backgroundColor: '#00436C',
  color: '#fff',
  cursor: 'pointer'
}

export default function description() {
  return (
    <BgWhite>
      <div style={backgroundStyle} />
      <Controller>
        <ContainerDesc>
          <SubTitleBlue>
            CONTATO
          </SubTitleBlue>
          <FormContact>
            <FormContent>
              <input type="text" id="name" style={inputData} name="nome" placeholder="Seu nome" minlength="2" />
              <input type="email" id="email" style={inputData} name="email" placeholder="Seu e-mail" minlength="5" />
              <input type='tel' id="phone" style={inputData} name="phone" title='Formato: XX XXXXX-XXXX' placeholder="Seu telefone (XX) XXXXX-XXXX" minlength="11" required />
            </FormContent>
            <FormContent>
            <textarea id="conteudo" style={textArea} name="content" placeholder="Conteúdo do email" minlength="10" required></textarea>
            </FormContent>
            <FormSubmit>
              <button type="submit" style={btnSubmit} id="submit" className="btn-submit" value="Submit">
                ENVIAR
              </button>
            </FormSubmit>
          </FormContact>
        </ContainerDesc>
      </Controller>
    </BgWhite>
  )
}
