import { useState } from "react";
import FormularioTurnos from "../components/admin/FormularioTurnos";
import ListadoTurnos from "../components/admin/ListadoTurnos";


const AdminPacientes = () => {
  const [turnos, setTurnos] = useState([])

  return (
    <>
      <div className="bg-gray-100 mx-auto text-center">
        <h1 className="font-black text-3xl text-center mb-4">
          Administrador de Turnos {""}
          <span className="text-indigo-600">Veterinaria</span>
        </h1>

        <div className="md:flex justify-center align-middle">
            <FormularioTurnos setTurno={setTurnos}/>
            <ListadoTurnos turnos={turnos} setTurno={setTurnos} />
        </div>
      </div>
    </>
  );
};

export default AdminPacientes;
