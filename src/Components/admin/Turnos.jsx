import React from "react";

const Turnos = ({ turno, onDelete, handleUpdate }) => {
  const { id, vet, pet, date, hour, details } = turno;

  const fechaDesdeBackend = date;
  const dateObj = new Date(fechaDesdeBackend);
  const fechaFormateada = dateObj.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="bg-white shadow-md mx-5 md:mx-0 mr-5 rounded-xl px-5 py-4 text-start mb-3">
        <p className="font-bold mb-1 text-gray-700 uppercase">
          Veterinario: <span className="font-normal normal-case mt">{vet}</span>
        </p>
        <p className="font-bold mb-1 text-gray-700 uppercase">
          Mascota: <span className="font-normal normal-case">{pet}</span>
        </p>
        <p className="font-bold mb-1 text-gray-700 uppercase">
          Fecha:{" "}
          <span className="font-normal normal-case">{fechaFormateada}</span>
        </p>
        <p className="font-bold mb-1 text-gray-700 uppercase">
          Hora: <span className="font-normal normal-case">{hour}</span>
        </p>
        <p className="font-bold mb-1 text-gray-700 uppercase">
          Detalles: <span className="font-normal normal-case">{details}</span>
        </p>

        <div className="mt-3">
          <button
            type="button"
            className="bg-primary px-4 py-2 mr-2 text-white font-bold rounded transition-all"
            onClick={() => handleUpdate(id)}
          >
            Editar
          </button>
          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 p-2 text-white font-bold rounded transition-all"
            onClick={() => onDelete(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default Turnos;
