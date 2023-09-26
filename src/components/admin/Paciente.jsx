import React from "react";

const Paciente = ({ paciente }) => {
  const { mascota, propietario, email, alta, sintomas } = paciente;

  return (
    <div className="bg-white shadow-md mx-5 md:mx-0 mr-5 rounded-xl px-5 py-4 text-start mb-3">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre de la Mascota:{" "}
        <span className="font-normal normal-case">{mascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta:{" "}
        <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div>
        <button
          type="button"
          className="bg-blue-700 hover:bg-blue-800 px-4 py-2 mr-2 text-white font-bold rounded transition-all"
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 p-2 text-white font-bold rounded transition-all"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
