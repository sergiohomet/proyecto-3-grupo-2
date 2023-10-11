import Swal from "sweetalert2";
import { axiosInstance } from "../../config/axiosInstance";
import Paciente from "./Paciente";
import { useState, useEffect } from "react";
import PacienteModalUpdate from "./PacienteModalUpdate";

const ListadoPaciente = ({ pacientes, setPacientes }) => {
  const [show, setShow] = useState(false);
  const [pacienteId, setPacienteId] = useState(null);

  const handleClose = () => {
    setShow(false);
    setPacienteId(null);
  };

  const handleShow = () => setShow(true);

  const handleUpdate = (_id) => {
    setPacienteId(_id);
    handleShow();
  };

  const handleDelete = async (_id) => {
    try {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Este es un cambio que no se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosInstance.delete(`/paciente/${_id}`);
          setPacientes((prevPacientes) =>
            prevPacientes.filter((paciente) => paciente._id !== _id)
          );
          Swal.fire("Eliminado!", "El paciente fue eliminado", "success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loadPacientes = async () => {
    try {
      const response = await axiosInstance.get("/pacientes");
      const { data } = response;
      const { pacientes } = data;
      setPacientes(pacientes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPacientes();
  }, [setPacientes]);

  return (
    <>
      <div className="md:w-3/4 lg:w-3/5 md:h-screen overflow-y-scroll mt-3 mx-auto lg:mx-0 md:mt-0">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">
              Listado Pacientes
            </h2>

            <p className="text-lg">
              Administra tus {""}
              <span className="text-green font-bold text-xl">Pacientes</span>
            </p>

            {pacientes.map((paciente, index) => (
              <Paciente
                key={paciente._id || index}
                paciente={paciente}
                onDelete={() => handleDelete(paciente._id)}
                handleUpdate={() => handleUpdate(paciente._id)}
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
              <span className="text-green font-bold text-xl">
                y aparecerán en este lugar
              </span>
            </p>
          </>
        )}
        <PacienteModalUpdate
          show={show}
          handleClose={handleClose}
          pacienteId={pacienteId}
          onUpdate={(updatedPaciente) => {
            const updatedPacientes = pacientes.map((paciente) =>
              paciente._id === pacienteId ? updatedPaciente : paciente
            );
            setPacientes(updatedPacientes);
          }}
        />
      </div>
    </>
  );
};

export default ListadoPaciente;
