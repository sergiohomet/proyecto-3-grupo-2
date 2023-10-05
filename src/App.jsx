import Registro from "./components/Registro"
import React from "react"
import { Route, Routes } from "react-router-dom";


function App() {
 

  return (
    
      <div className='App'>
        <NavBarpagina />
        
        
        {/* <Router> */}
          
        <Routes>
           
            <Route path='/Registro' element={<Registro/>}/>
            </Routes>
        {/* </Router> */}
       
        <Footer/>
      </div>
      
    
  );
}

export default App