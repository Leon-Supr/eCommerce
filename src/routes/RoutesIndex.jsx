import {Route, Routes} from 'react-router-dom'
import React from 'react'
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import Secret from '@/pages/Secret'
import Register from '@/pages/Register'
import Login from '@/pages/Login'


const RoutesIndex = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/secret" element={<Secret />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Register />}/>
    </Routes>
  )
}

export default RoutesIndex
