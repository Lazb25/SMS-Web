import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import View from './pages/View'
import Home from './pages/Home'

function App() {
  return (
    <div className="">
    <BrowserRouter>

      <NavBar/>
      <Routes className=''>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<View/>} />
        <Route path='/create' element={<Form/>} />
        
      </Routes>
     
      
    </BrowserRouter>
    <p className='text-center mt-10 text-sm text-gray-500'>©Lazar 2024 Student Management System.</p>
    </div>
  )
}

export default App
