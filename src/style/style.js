import styled from 'styled-components';
import { color, device } from '../components/_items/constants'

export const Header = styled.header`
  height: 65px;
  background: ${color.white};
  display: flex;
  justify-content: center;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  border-bottom: 3px solid ${color.blueDefault};
`
export const ImgTitle = styled.img`
  height: 100%;
  width: auto;
  max-width: 170px;
`;
export const ImgFooter = styled.img`
  height: 50px;
  width: auto;
`;
export const Controller = styled.div`
  max-width: 970px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  opacity: 1;
`
export const MenuItemsDesk = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${device.mobileL} {
    display: none;
  }
`
export const MenuItemsMobile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  @media ${device.supMobile} {
    display: none;
  }
`
export const ContainerDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(85vh - 60px);
  position: relative;
  &.home{
    @media ${device.mobileL} {
      padding-top: 130px;
      justify-content: flex-start;
    }
  }
`
export const TitleYellow = styled.h1`
  color: ${color.yellowDefault};
  padding: 0;
  margin: 5px 0;
  font-size: 2.6rem;
  @media ${device.mobileL} {
    font-size: 1.7rem;
    width: 95%;
    text-align: center;
  }
`

export const TitleBlue = styled.h1`
  color: ${color.blueLight};
  padding: 0;
  margin: 5px 0;
  font-size: 4rem;
  @media ${device.mobileL}{
    font-size: 2.5rem;
  }
`
export const SubTitleWhite = styled.h2`
  color: ${color.white};
  padding: 0;
  margin: 4% 0;
  @media ${device.mobileL} {
    font-size: 1.1rem;
    width: 95%;
    text-align: center;
  }
`
export const SubTitleBlue = styled.h2`
  color: ${color.blueLight};
  padding: 0;
  margin: 4% 0;
  text-align: center;
  width: 78%;
  @media ${device.mobileL} {
    margin-top: 10%;
    width: 85%;
  }
`
export const BgBlue = styled.div`
  background: rgb(0,53,90);
background: linear-gradient(90deg, rgba(0,53,90,1) 20%, rgba(0,88,132,1) 76%, rgba(0,53,90,1) 100%);
`
export const BgWhite = styled.div`
  background-color: ${color.white};
  position: relative;
  height: auto;
  `
export const ImgBgWhite = styled.div`
  height: 15%;
  max-height: 100px;
  position: absolute;
  width: 100%;
  opacity: 0.5;
  @media ${device.mobileL} {
    height: 4%;
    min-height: 60px;
  }
`
export const BtnYellow = styled.button`
  width: 200px;
  color: ${color.blueLight};
  font-weight:bolder;
  background-color: ${color.yellowDefault};
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  @media ${device.mobileL} {
    width: 100%;
    margin-bottom: 15px;
  }
`
export const TextBtnYellow = styled.p`
  font-size: 1.25rem;
  color: ${color.blueLight};  
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 75%;
  margin: 10% 0;
  position: absolute;
  bottom: 5%;
  @media ${device.mobileL} {
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
    bottom: 1%;
  }
`
export const DepoimentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  @media ${device.mobileL}{
    justify-content: center;
    flex-flow: column;
    align-items: center;
  }
`
export const DepoimentItem = styled.div`
  width: 26%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  margin: 5% 3.5%;
  @media ${device.mobileL} {
    width: 85%;
  }
`
export const DepoimentImage = styled.img`
  width: 140px;
  height: 180px;
`
export const InstaContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 5%;
  @media ${device.mobileL} {
    justify-content: center;
  }
`
export const InstaImg = styled.img`
  width: 320px;
  margin: 1px;
`
export const FormContact = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  @media ${device.mobileL} {
    flex-flow: column;
    align-items: center;
  }
` 
export const FormContent = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  flex-direction: column;
  padding: 2.5%;
  @media ${device.mobileL} {
    width: 95%;
  }
`
export const FormSubmit = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const Tour3d = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2.5%;
  margin-bottom: 10%;
`
export const Footer = styled.div`
  width: 100%;
  background-color: ${color.blueFooter};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`
export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  color: ${color.white};
  margin: 1.5% 0% 0%;
  @media ${device.laptop} {
  }
  @media ${device.mobileL} {
    flex-direction: column;
  }
` 
export const FooterText = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  @media ${device.mobileL} {
    margin: 3% 0 2%;
  }
`
export const FooterIcons = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  @media ${device.mobileL} {
    width: 50%;
    margin-top: 3%;
  }
`
export const Mass = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`
export const Iframe = styled.iframe`
  width: 100%;
  height: 480px;
  border: 0;
  @media ${device.mobileL} {
    width: 80%;
    height: 80vh;
  }
`