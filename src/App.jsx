import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import SideBar from "./components/SideBar"
import Home from './pages/Home'
import Resume from './pages/Resume'
import Templates from './pages/Templates'
import Auth from './pages/auth'

function App() {


  return (
    <Router>
      <div  className='flex h-screen'> 
     <SideBar/>
    </div>

    <div className="flex-1 p-6 overflow-auto">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/login" element={<Auth mode="login"/>}/>
      <Route path="/register" element={<Auth mode="register"/>}/>

      <Route className="hover:bg-gray-700 p-2 rounded" path="/templates" element={<Templates/>}/>
    </Routes>
    </div>
        
    </Router>
  )
}

export default App
