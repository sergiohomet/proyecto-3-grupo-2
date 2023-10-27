import Index from "./pages";
import { Route, Routes } from "react-router-dom";
import AdminPacientes from "./pages/AdminPacientes";
import AdminTurnos from "./pages/AdminTurnos";
import AdminIndex from "./pages/AdminIndex";
import Login from "./pages/Login";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { useEffect, useState } from "react";
import Contacto from "./pages/Contacto";
import NavBarpagina from "./Components/navegacion/NavBarpagina";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./Components/Footer";
import AcercaDeNosotros from "./Components/AcercaDeNosotros";
import AdminUsuarios from "./pages/AdminUsuarios";

function App() {
  const [isLogged, setIsLogged] = useState(
    Boolean(localStorage.getItem("token"))
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogged(Boolean(token));
  }, []);

  return (
    <>
      <div className="app-container">
        <NavBarpagina setIsLogged={setIsLogged} isLogged={isLogged} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/nosotros" element={<AcercaDeNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/usuarios" element={<AdminUsuarios />} />
            <Route
              path="/login"
              element={<Login setIsLogged={setIsLogged} />}
            />
            <Route element={<PrivateRoutes />}>
              <Route path="/pacientes" element={<AdminPacientes />} />
              <Route path="/turnos" element={<AdminTurnos />} />
              <Route path="/admin" element={<AdminIndex />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
