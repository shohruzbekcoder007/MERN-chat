import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import { MainWrapper } from './../../global-styles'

export default function Main() {
  return (
    <MainWrapper>
      <Sidebar/>
      <Outlet/>
    </MainWrapper>
  )
}
