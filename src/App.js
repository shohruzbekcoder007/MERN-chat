import React from 'react'
import Main from './components/Main'
import Home from './components/Home'
import Message from './components/Message'
import Notification from './components/Notification'
import Settings from './components/Settings'
import {
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="message" element={<Message />} />
        <Route path="notification" element={<Notification />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
