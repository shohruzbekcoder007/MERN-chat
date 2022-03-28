import React from 'react'
import ellipse1 from './../../images/ellipse1.png'
import { SidebarWrapper,
  SidebarHeader,
  SidebarHeaderImage,
  SidebarLinkList,
  SidebarLinkListItem,
  MyNavLink
} from './styles'
import './style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-regular-svg-icons'

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarHeader>
          <SidebarHeaderImage>
            <img src={ellipse1} alt="personal logo"/>
          </SidebarHeaderImage>
      </SidebarHeader>
      <SidebarLinkList>
        <SidebarLinkListItem>
          <MyNavLink
            to="/"
            style={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Home
          </MyNavLink>
        </SidebarLinkListItem>
        <SidebarLinkListItem>
          <MyNavLink
            to="/message"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Message
          </MyNavLink>
        </SidebarLinkListItem>
        <SidebarLinkListItem>
          <MyNavLink
            to="/notification"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Notification
          </MyNavLink>
        </SidebarLinkListItem>
        <SidebarLinkListItem>
          <MyNavLink
            to="/settings"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Settings
          </MyNavLink>
        </SidebarLinkListItem>
      </SidebarLinkList>
    </SidebarWrapper>
  )
}
