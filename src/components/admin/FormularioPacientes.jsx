import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PACIENTES_SCHEMA } from "../../helpers/validationSchema";
import Error from "../Error";

const FormularioPacientes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PACIENTES_SCHEMA),
  });

  const onSubmit = (data) => {
    console.log(data);
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
        <div className="mb-2">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold text-start"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            name="mascota"
            placeholder="Nombre de la mascota"
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
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold text-start"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            name="propietario"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            {...register("propietario")}
          />
          {errors.propietario?.message && (
            <Error>
              <p>{errors.propietario.message}</p>
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
            placeholder="Email Contacto"
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
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold text-start"
          >
            Fecha de alta
          </label>
          <input
            id="alta"
            type="date"
            name="alta"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            {...register("alta")}
          />
          {errors.alta?.message && (
            <Error>
              <p>{errors.alta.message}</p>
            </Error>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold text-start"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            name="sintomas"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas..."
            {...register("sintomas")}
          />
          {errors.sintomas?.message && (
            <Error>
              <p>{errors.sintomas.message}</p>
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
