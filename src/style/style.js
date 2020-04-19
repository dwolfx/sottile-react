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