import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const SidebarWrapper = styled.div`
    width: 186px;
    border-radius: 20px;
    background-color: #1A66FF;
    // height: 954px;
    padding-top: 37px;
`;

export const SidebarHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 78px;
`;

export const SidebarHeaderImage = styled.div`
    display: inline-block;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SidebarLinkList = styled.ul`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
`;

export const SidebarLinkListItem = styled.li`
    width: max-content;
    padding-bottom: 35px;
`;

export const MyNavLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 161px;
    height: 89px;
`;