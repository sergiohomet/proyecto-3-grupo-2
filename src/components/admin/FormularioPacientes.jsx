import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PACIENTE_SCHEMA } from "../../helpers/validationSchema";
import Error from "../Error";

const FormularioPacientes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PACIENTE_SCHEMA)
  });

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-1xl md:text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg text-center">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg py-3 px-3"
      >
        <h5 className="mb-3 font-bold">Datos del propietario</h5>
        <div className="mb-2">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold text-start"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Ejemplo: Nicolas, Matias, etc"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            {...register("nombre")}
          />
          {errors.nombre?.message && (
            <Error>
              <p>{errors.nombre.message}</p>
            </Error>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="apellido"
            className="block text-gray-700 uppercase font-bold text-start"
          >
            Apellido
          </label>
          <input
            id="apellido"
            type="text"
            name="apellido"
            placeholder="Ejemplo: Rodriguez, Navarro, Burgos, etc"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            {...register("apellido")}
          />
          {errors.apellido?.message && (
            <Error>
              <p>{errors.apellido.message}</p>
            </Error>
          )}
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
            placeholder="Ejemplo: correo@correo.com"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            {...register("username")}
          />
          {errors.username?.message && (
            <Error>
              <p>{errors.username.message}</p>
            </Error>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="telefono"
            className="block text-gray-700 uppercase font-bold text-start"
          >
            Telefono
          </label>
          <input
            id="telefono"
            type="text"
            name="telefono"
            placeholder="Ejemplo: 3813414*** (Sin 0 ni 15)"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            {...register("telefono")}
          />
          {errors.telefono?.message && (
            <Error>
              <p>{errors.telefono.message}</p>
            </Error>
          )}
        </div>

        <h5 className="mt-4 font-bold">Datos de la mascota</h5>
        <div className="mb-2">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold text-start"
          >
            Mascota
          </label>
          <input
            id="mascota"
            type="text"
            name="mascota"
            placeholder="Ejemplo: Hook"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            {...register("mascota")}
          />
          {errors.mascota?.message && (
            <Error>
              <p>{errors.mascota.message}</p>
            </Error>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="especie"
            className="block text-gray-700 uppercase font-bold text-start"
          >
            Especie
          </label>
          <input
            id="especie"
            type="text"
            name="especie"
            placeholder="Ejemplo: Perro, gato, etc"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            {...register("especie")}
          />
          {errors.especie?.message && (
            <Error>
              <p>{errors.especie.message}</p>
            </Error>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="raza"
            className="block text-gray-700 uppercase font-bold text-start"
          >
            Raza
          </label>
          <input
            id="raza"
            type="text"
            name="raza"
            placeholder="Ejemplo: Bulldog, sharpei, firulais, etc"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            {...register("raza")}
          />
          {errors.raza?.message && (
            <Error>
              <p>{errors.raza.message}</p>
            </Error>
          )}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded transition-all"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default FormularioPacientes;
