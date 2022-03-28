import React from 'react'
import { SidebarWrapper, SidebarHeader, SidebarHeaderImage } from './styles'
import ellipse1 from './../../images/ellipse1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-regular-svg-icons'

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarHeader>
          <SidebarHeaderImage>
            <img src={ellipse1}/>
          </SidebarHeaderImage>
      </SidebarHeader>
      menu
      <FontAwesomeIcon icon={ faCoffee } />
    </SidebarWrapper>
  )
}
