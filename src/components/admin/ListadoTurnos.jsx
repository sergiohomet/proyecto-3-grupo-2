import Turnos from "./Turnos";
import { axiosInstance } from "../../config/axiosInstance";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import TurnoModalUpdate from "./TurnoModalUpdate";

const ListadoTurnos = ({ turnos, setTurno }) => {
  const [show, setShow] = useState(false);
  const [turnoId, setTurnoId] = useState(null);

  const handleClose = () => {
    setShow(false);
    setTurnoId(null);
  };

  const handleShow = () => setShow(true);

  const handleUpdate = (id) => {
    setTurnoId(id);
    handleShow();
  };

  const handleDelete = async (id) => {
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
          await axiosInstance.delete(`/turnos/${id}`);
          setTurno((newData) => newData.filter((turno) => turno.id !== id));
          Swal.fire("Eliminado!", "El turno fue eliminado", "success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loadTurnos = async () => {
    try {
      const response = await axiosInstance.get("/turnos");
      setTurno(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTurnos();
  }, [setTurno]);

  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-3 md:mt-0">
        {turnos && turnos.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado turnos</h2>

            <p className="text-lg">
              Administra los {""}
              <span className="text-indigo-600 font-bold text-xl">turnos</span>
            </p>

            {turnos.map((turno) => (
              <Turnos
                key={turno.id}
                turno={turno}
                onDelete={() => handleDelete(turno.id)}
                handleUpdate={() => handleUpdate(turno.id)}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Turnos</h2>

            <p className="text-lg mt-5 mb-5">
              Comienza agregado turnos {""}
              <span className="text-indigo-600 font-bold text-xl">
                y aparecerán en este lugar
              </span>
            </p>
          </>
        )}
        <TurnoModalUpdate
          show={show}
          handleClose={handleClose}
          turnoId={turnoId}
          onUpdate={(updatedTurno) => {
            const updatedTurnos = turnos.map((turno) =>
              turno.id === turnoId ? updatedTurno : turno
            );
            setTurno(updatedTurnos);
          }}
        />
      </div>
    </>
  );
};

export default ListadoTurnos;
