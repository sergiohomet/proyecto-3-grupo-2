import Index from "./pages";
import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error.jsx";
import NavBarpagina from "./Components/navegacion/NavBarpagina.jsx";
import Footer from "./components/footer/Footer";
import AdminPacientes from "./pages/AdminPacientes";
import AdminTurnos from "./pages/AdminTurnos";
import AdminIndex from "./pages/AdminIndex";
import Nosotros from "./pages/Nosotros";
import Login from "./pages/Login";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { useEffect, useState } from "react";
import Contacto from "./pages/Contacto";

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
      <NavBarpagina setIsLogged={setIsLogged} isLogged={isLogged} />
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Error />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/pacientes" element={<AdminPacientes />} />
            <Route path="/turnos" element={<AdminTurnos />} />
            <Route path="/admin" element={<AdminIndex />} />
          </Route>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
