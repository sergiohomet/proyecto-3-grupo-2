import Index from "./pages";
import { Route, Routes } from "react-router-dom";
import AdminPacientes from "./pages/AdminPacientes";
import AdminTurnos from "./pages/AdminTurnos";
import AdminIndex from "./pages/AdminIndex";

function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pacientes" element={<AdminPacientes />} />
        <Route path="/turnos" element={<AdminTurnos />} />
        <Route path="/admin" element={<AdminIndex />} />
      </Routes>
    </>
  );
}

export default App;
