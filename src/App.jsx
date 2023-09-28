import { Route, Routes } from "react-router-dom"
import AdminPacientes from "./pages/AdminPacientes"
import AdminTurnos from "./pages/AdminTurnos"


function App() {
  

  return (
    <>
      


      <Routes>
        <Route path="/pacientes" element={ <AdminPacientes /> } />
        <Route path="/turnos" element={ <AdminTurnos /> } />
      </Routes>
    </>
  )
}

export default App
