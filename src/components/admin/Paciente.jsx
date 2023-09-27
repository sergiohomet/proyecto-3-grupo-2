import React from "react";

const Paciente = ({ paciente }) => {
  const { nombre, apellido, email, telefono, mascota, especie, raza } =
    paciente;

  return (
    <div className="bg-white shadow-md mx-5 md:mx-0 mr-5 rounded-xl px-5 py-4 text-start mb-3">
      <h5 className="text-center font-bold">Datos del dueño</h5>
      <p className="font-bold mb-1 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-1 text-gray-700 uppercase">
        Apellido: <span className="font-normal normal-case">{apellido}</span>
      </p>
      <p className="font-bold mb-1 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-1 text-gray-700 uppercase">
        Teléfono: <span className="font-normal normal-case">{telefono}</span>
      </p>

      <h5 className="text-center my-2 font-bold">Datos de la mascota</h5>
      <p className="font-bold mb-1 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{mascota}</span>
      </p>
      <p className="font-bold mb-1 text-gray-700 uppercase">
        Especie: <span className="font-normal normal-case">{especie}</span>
      </p>
      <p className="font-bold mb-1 text-gray-700 uppercase">
        Raza: <span className="font-normal normal-case">{raza}</span>
      </p>

      <div className="mt-3">
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
