import styled from 'styled-components';

export const Header = styled.header`
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`
export const ImgTitle = styled.img`
  height: 100%;
  width: auto;
`;
export const Controller = styled.div`
  max-width: 970px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  opacity: 1;
`
export const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const MenuText = styled.button`
  color: #00436C;
  font-size: 1rem;
  display: flex;
  align-self: center;
  font-weight: bold;
  padding: 5px 10px;
  border: 0;
  background-color: #fff;
  &.active{
    color: #FFCB05;
    background-color: #00436C;
    &:hover{
      color: #FFCB05;
      background-color: #00436C;
    }
  }
  &:hover{
    color: #FFF;
    background-color: #00436C;
  }
`
export const ContainerDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(85vh - 60px);
  position: relative;
`
export const TitleYellow = styled.h1`
  color: #FFCB05;
  padding: 0;
  margin: 5px 0;
  font-size: 2.6rem;
`
export const TitleBlue = styled.h1`
  color: #005884;
  padding: 0;
  margin: 5px 0;
  font-size: 4rem;
`
export const SubTitleWhite = styled.h2`
  color: #fff;
  padding: 0;
  margin: 4% 0;
`
export const SubTitleBlue = styled.h2`
  color: #005884;
  padding: 0;
  margin: 4% 0;
  text-align: center;
  width: 78%;
`
export const BgBlue = styled.div`
  background: rgb(0,53,90);
  background: linear-gradient(90deg, rgba(0,53,90,1) 0%, rgba(0,88,132,1) 71%);
`
export const BgWhite = styled.div`
  background-color: #fff;
`
export const BtnYellow = styled.button`
  width: 200px;
  color: #005884;
  font-weight:bolder;
  background-color: #FFCB05;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
`
export const TextBtnYellow = styled.p`
  font-size: 1.25rem;
  color: #005884;  
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 75%;
  margin: 10% 0;
  position: absolute;
  bottom: 5%;
`
export const DepoimentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`
export const DepoimentItem = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
`
export const DepoimentImage = styled.img`
  width: 140px;
  height: 180px;
`
export const InstaContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`
export const InstaImg =  styled.img`
  width: 320px;
  margin: 1px;
`