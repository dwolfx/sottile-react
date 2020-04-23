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
`
export const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const MenuText = styled.div`
  color: #00436C;
  font-size: 1rem;
  display: flex;
  align-self: center;
  font-weight: bold;
  padding: 5px 10px;
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
  height: calc(80vh - 60px);
`
export const TitleYellow = styled.h1`
  color: #FFCB05;
  padding: 0;
  margin: 5px 0;
`
export const SubTitleWhite = styled.h2`
  color: #fff;
  padding: 0;
  margin: 10px 0;
`
export const BgBlue = styled.div`
  background: rgb(0,53,90);
  background: linear-gradient(90deg, rgba(0,53,90,1) 0%, rgba(0,88,132,1) 71%);
`
export const BgWhite = styled.div`
  background-color: #fff;
`
