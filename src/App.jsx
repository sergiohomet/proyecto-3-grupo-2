import Index from "./pages";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import AdminPacientes from "./pages/AdminPacientes";
import AdminTurnos from "./pages/AdminTurnos";
import AdminIndex from "./pages/AdminIndex";
import Nosotros from "./pages/Nosotros";
import Login from "./pages/Login";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { useEffect, useState } from "react";
import Contacto from "./pages/Contacto";
import NavBarpagina from "./components/navegacion/NavBarpagina";
import ErrorPage from "./pages/ErrorPage";

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
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
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
