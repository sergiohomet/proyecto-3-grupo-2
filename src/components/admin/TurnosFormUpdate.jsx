import React, { useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";

const TurnoFormUpdate = ({ turno, onUpdate }) => {
  const [formDatos, setFormDatos] = useState({ ...turno });

  const handleChangeDatos = (e) => {
    setFormDatos({
      ...formDatos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.put(`/turnos/${turno.id}`, formDatos, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onUpdate(formDatos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-3 px-3"
    >
      <div className="mb-2">
        <label
          htmlFor="vet"
          className="block text-gray-700 uppercase font-bold text-start"
        >
          Veterinario
        </label>
        <select
          id="vet"
          name="vet"
          value={formDatos.vet || ""}
          className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md text-center"
          onChange={handleChangeDatos}
        >
          <option className="text-xl" disabled>
            --Seleccione un Veterinario--
          </option>
          <option className="text-xl" value="Dr. Jack">
            Dr. Jack
          </option>
          <option className="text-xl" value="Dra. Lisa">
            Dra. Lisa
          </option>
        </select>
      </div>
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
          value={formDatos.pet || ""}
          placeholder="Ejemplo: Hook, Dino, etc"
          className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
          onChange={handleChangeDatos}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="date"
          className="block text-gray-700 uppercase font-bold text-start"
        >
          Fecha
        </label>
        <input
          id="date"
          type="date"
          name="date"
          value={formDatos.date || ""}
          className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
          onChange={handleChangeDatos}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="hour"
          className="block text-gray-700 uppercase font-bold text-start"
        >
          Hora
        </label>
        <input
          id="hour"
          type="time"
          name="hour"
          value={formDatos.hour || ""}
          className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
          onChange={handleChangeDatos}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="details"
          className="block text-gray-700 uppercase font-bold text-start"
        >
          Detalles
        </label>
        <textarea
          id="details"
          type="text"
          name="details"
          value={formDatos.details || ""}
          placeholder="Ejemplo: Vacunación, checkeo"
          className="border-2 w-full p-2 mt-1 mb-0 placeholder-gray-400 rounded-md resize-none"
          onChange={handleChangeDatos}
        />
      </div>

      <input
        type="submit"
        className="btn btn-primary w-100 fs-5"
        value="Modificar"
      />
    </form>
  );
};

export default TurnoFormUpdate;
