import { useState } from "react";
import FormularioTurnos from "../Components/admin/FormularioTurnos";
import ListadoTurnos from "../components/admin/ListadoTurnos";

const AdminPacientes = () => {
  const [turnos, setTurnos] = useState([]);

  return (
    <>
      <div className="bg-gray-100 mx-auto text-center">
        <h1 className="font-black text-3xl text-center mb-4 mt-3">
          Administrador de Turnos {""}
          <span className="text-green">Veterinaria</span>
        </h1>

        <div className="flex flex-col lg:flex-row justify-center align-middle">
          <FormularioTurnos setTurno={setTurnos} />
          <ListadoTurnos turnos={turnos} setTurno={setTurnos} />
        </div>
      </div>
    </>
  );
};

export default AdminPacientes;
