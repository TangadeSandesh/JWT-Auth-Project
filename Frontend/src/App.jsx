import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './assets/Home'
import Login from './assets/Login'
import Register from './assets/Register'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App
