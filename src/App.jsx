import React from 'react'
import Error from './pages/Error.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  )
}

export default App
 
