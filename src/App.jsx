import React from "react";
import "./Components/AcercaDeNosotros.css";
import { Route, Routes } from "react-router-dom";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <Routes>
      <Route path="/nosotros" element={<Nosotros />} />
    </Routes>
  );
}

export default App;
