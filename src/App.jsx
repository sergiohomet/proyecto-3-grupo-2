import "./App.css";
import Inicio from "./pages/Inicio";
import { Route, Routes } from "react-router-dom";
import NavBarpagina from "./components/navegacion/NavBarpagina";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBarpagina />

      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
