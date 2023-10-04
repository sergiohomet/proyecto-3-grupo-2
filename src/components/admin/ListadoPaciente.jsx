import { axiosInstance } from "../../config/axiosInstance";
import Paciente from "./Paciente";

const ListadoPaciente = ({ pacientes, setPacientes }) => {
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/pacientes/${id}`);
      setPacientes((newData) =>
        newData.filter((paciente) => paciente.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-3 md:mt-0">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">
              Listado Pacientes
            </h2>

            <p className="text-lg">
              Administra tus {""}
              <span className="text-indigo-600 font-bold text-xl">
                Pacientes
              </span>
            </p>

            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                onDelete={() => handleDelete(paciente.id)}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay pacientes
            </h2>

            <p className="text-lg mt-5 mb-5">
              Comienza agregado pacientes {""}
              <span className="text-indigo-600 font-bold text-xl">
                y aparecerán en este lugar
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ListadoPaciente;
