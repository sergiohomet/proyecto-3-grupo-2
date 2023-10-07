import React, { useState } from "react";
import FormularioPacientes from "../components/admin/FormularioPacientes";
import ListadoPaciente from "../components/admin/ListadoPaciente";

const AdminPacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  return (
    <>
      <div className="bg-gray-100 mx-auto text-center">
        <h1 className="font-black text-3xl text-center mb-4">
          Administrador de Pacientes {""}
          <span className="text-indigo-600">Veterinaria</span>
        </h1>

        <div className="md:flex justify-center align-middle">
          <FormularioPacientes setPacientes={setPacientes} />
          <ListadoPaciente pacientes={pacientes} setPacientes={setPacientes} />
        </div>
      </div>
    </>
  );
};

export default AdminPacientes;
