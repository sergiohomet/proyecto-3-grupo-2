import Index from "./pages/Index";
import { Route, Routes } from "react-router-dom";
import AdminPacientes from "./pages/AdminPacientes";
import AdminTurnos from "./pages/AdminTurnos";
import AdminIndex from "./pages/AdminIndex";

function App() {
  return (
    <>
      <Index />

      <Routes>
        <Route path="/pacientes" element={<AdminPacientes />} />
        <Route path="/turnos" element={<AdminTurnos />} />
        <Route path="/admin" element={<AdminIndex />} />
      </Routes>
    </>
  );
}

export default App;
