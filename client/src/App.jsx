import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Route path='/' element={<Home/>} />
    </div>
  )
}

export default App
