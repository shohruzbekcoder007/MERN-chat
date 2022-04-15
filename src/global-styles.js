import styled from 'styled-components'

export const MainWrapper = styled.div`
   width: 1440px;
   margin: 0 auto;
   padding: 33px;
   display: flex;
   justify-content: space-between;
   background-color: #EAEAEA;
   min-height: 100vh;
   @media (max-width: 1440px) {
    width: 100%;
  }
`;

export const SearchComponent = styled.div`
    display: flex;
    border-radius: 20px;
    background-color: #FFF;
    padding-left: 23px;
    padding-right: 21px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 59px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const SearchInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: rgba(61, 61, 61, 0.35);
    padding: 0 36px;
`;

export const SearchButton = styled.div`
    display: inline-block;
    cursor: pointer;
    img {
        display: inline-block;
    }
`;

export const SearchImage = styled.div`
    display: inline-block;
`;

export const ContBox = styled.div`
    display: block;
    width: 100%;
    scroll: auto;
    height: ${props => props.height};
    box-shadow: ${props => {return props.shadow?'0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)':''}};
    border-radius: 20px;
    background-color: #FFF;
    padding: 22px;
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 17px;
  img { 
    display: inline-block;
    cursor: pointer;
  }
  h4 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
  }
`
