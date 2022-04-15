import styled from 'styled-components'

export const MainCopmonentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const GroupsBox = styled.div`
    width: 427px;
    display: flex;
    flex-direction: column;
`;

export const FriendsBox = styled.div`
    width: max-content;
`;

export const RecentCallsBox = styled.div`
    width: max-content;
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

export const UsersBox = styled.div`
    display: block;
    width: 100%;
    scroll: auto;
    height: 347px;
    box-shadow: ${props => {return props.shadow?'0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)':''}};
    border-radius: 20px;
    background-color: #FFF;
    padding: 20px 13px 22px 19px;
`;

