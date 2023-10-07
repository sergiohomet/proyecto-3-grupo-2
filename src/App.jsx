import Index from "./pages";
import { Route, Routes } from "react-router-dom";
import NavBarpagina from "./components/navegacion/NavBarpagina";
import Footer from "./components/footer/Footer";
import AdminPacientes from "./pages/AdminPacientes";
import AdminTurnos from "./pages/AdminTurnos";
import AdminIndex from "./pages/AdminIndex";
import "./app.css";
import Registro from "./pages/Registro";


function App() {
  return (
    <>
      <NavBarpagina />
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/pacientes" element={<AdminPacientes />} />
          <Route path="/turnos" element={<AdminTurnos />} />
          <Route path="/admin" element={<AdminIndex />} />
        </Routes>
      <Footer />
      
      </div>
    </>
  );
}

export default App;
