import React from 'react'
import {} from './styles'
import { BrowserRouter } from "react-router-dom"
import Sidebar from '../Sidebar'
import Worker from '../Worker'

export default function Main() {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Worker/>
    </BrowserRouter>
  )
}
