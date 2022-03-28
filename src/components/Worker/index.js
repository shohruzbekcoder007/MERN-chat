import React from 'react'
import {
    Routes,
    Route,
    Outlet
  } from "react-router-dom"
import Home from '../Home'
import Message from '../Message'
import Notification from '../Notification'
import Settings from '../Settings'

export default function Worker() {
  return (
    <div>
        <Routes>
            <Route index element={<Home />} />
            <Route path="message" element={<Message />} />
            <Route path="notification" element={<Notification />} />
            <Route path="settings" element={<Settings />} />
        </Routes>
    </div>
  )
}
