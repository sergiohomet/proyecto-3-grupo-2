import { useState } from 'react'

import './App.css'
// import { BrowserRouter, Router, Route } from 'react-router-dom'



import Inicio from './pages/Inicio'
import Turnos from './pages/Turnos'
import Servicios from './pages/Servicios'
import Registro from './pages/Registro'
import { Route, Routes } from "react-router-dom";
import NavBarpagina from './components/navegacion/NavBarpagina'
import Footer from './components/footer/footer'





function App() {
 

  return (
    
      <div className='App'>
        <NavBarpagina />
        
        
        {/* <Router> */}
          
        <Routes>
            <Route path='/Inicio' element={<Inicio />}/>
            <Route path='/Turnos' element={<Turnos />}/>
            <Route path='/Servicios' element={<Servicios/>}/>
            <Route path='/Registro' element={<Registro/>}/>
            </Routes>
        {/* </Router> */}
       
        <Footer/>
      </div>
      
    
  );
}

export default App
