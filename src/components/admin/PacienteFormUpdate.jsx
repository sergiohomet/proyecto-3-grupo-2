import React, { useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";

const PacienteFormUpdate = ({ paciente, onUpdate }) => {
  const [formDatos, setFormDatos] = useState({...paciente})

  const handleChangeDatos = (e) => {
    setFormDatos({
      ...formDatos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await axiosInstance.put(`/pacientes/${paciente.id}`, formDatos);
        onUpdate(formDatos);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="py-3 px-3"
    >
      <h5 className="mb-3 font-bold text-center">Datos del propietario</h5>
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block text-gray-700 uppercase font-bold text-start"
        >
          Nombre
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formDatos.name}
          placeholder="Ejemplo: Nicolas, Matias, etc"
          className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
          onChange={handleChangeDatos}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="lastname"
          className="block text-gray-700 uppercase font-bold text-start"
        >
          Apellido
        </label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={formDatos.lastname}
          placeholder="Ejemplo: Rodriguez, Navarro, Burgos, etc"
          className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
          onChange={handleChangeDatos}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="email"
          className="block text-gray-700 uppercase font-bold text-start"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="username"
          value={formDatos.username}
          placeholder="Ejemplo: correo@correo.com"
          className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
          onChange={handleChangeDatos}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="phone"
          className="block text-gray-700 uppercase font-bold text-start"
        >
          Telefono
        </label>
        <input
          id="phone"
          type="text"
          name="phone"
          value={formDatos.phone}
          placeholder="Ejemplo: 3813414*** (Sin 0 ni 15)"
          className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
          onChange={handleChangeDatos}
        />
      </div>

      <h5 className="mt-4 font-bold text-center">Datos de la mascota</h5>
      <div className="mb-2">
        <label
          htmlFor="pet"
          className="block text-gray-700 uppercase font-bold text-start"
        >
          Mascota
        </label>
        <input
          id="pet"
          type="text"
          name="pet"
          value={formDatos.pet}
          placeholder="Ejemplo: Hook"
          className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
          onChange={handleChangeDatos}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="kind"
          className="block text-gray-700 uppercase font-bold text-start"
        >
          Especie
        </label>
        <input
          id="kind"
          type="text"
          name="kind"
          value={formDatos.kind}
          placeholder="Ejemplo: Perro, gato, etc"
          className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
          onChange={handleChangeDatos}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="breed"
          className="block text-gray-700 uppercase font-bold text-start"
        >
          Raza
        </label>
        <input
          id="breed"
          type="text"
          name="breed"
          value={formDatos.breed}
          placeholder="Ejemplo: Bulldog, sharpei, firulais, etc"
          className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
          onChange={handleChangeDatos}
        />
      </div>

      <input
        type="submit"
        className="bg-indigo-600 w-full p-2 mt-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded transition-all"
        value="Modificar"
      />
    </form>
  );
};

export default PacienteFormUpdate;
