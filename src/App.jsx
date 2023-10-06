import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Registro from "./pages/Registro";

function App() {
  return (
    <Routes>
      <Route path="/registro" element={<Registro />} />
    </Routes>
  );
}

export default App;
