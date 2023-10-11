import Index from "./pages";
import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error.jsx";
import NavBarpagina from "./Components/navegacion/NavBarpagina.jsx";
import Footer from "./components/footer/Footer";
import AdminPacientes from "./pages/AdminPacientes";
import AdminTurnos from "./pages/AdminTurnos";
import AdminIndex from "./pages/AdminIndex";
import Registro from "./pages/Registro";
import Nosotros from "./pages/Nosotros";
import Login from "./pages/Login";
import PrivateRoutes from "./Routes/PrivateRoutes";

function App() {
  return (
    <>
      <NavBarpagina />
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Error />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/pacientes" element={<AdminPacientes />} />
            <Route path="/turnos" element={<AdminTurnos />} />
            <Route path="/admin" element={<AdminIndex />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
