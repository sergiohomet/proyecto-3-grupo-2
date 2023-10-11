import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TURNOS_SCHEMA } from "../../helpers/validationSchema";
import Error from "../Error";
import { axiosInstance } from "../../config/axiosInstance";
import { useEffect } from "react";

const FormularioTurnos = ({ setTurno }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TURNOS_SCHEMA),
  });

  const fetchData = async () => {
    try {
      await axiosInstance.get('/turnos')
      .then( response => {
        const { data } = response;
        setTurno(data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post("/turnos", data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      reset();
    } catch (error) {
      console.log(error);
    } finally {
      fetchData(data);
    } 
  };
    
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-1xl md:text-3xl text-center">
          Seguimiento Turnos
        </h2>

        <p className="text-lg text-center">
          Añade turnos y {""}
          <span className="text-green font-bold">Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
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
              name="vet"
              id="vet"
              defaultValue=""
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md text-center"
              {...register("vet")}
            >
              <option className="text-xl" value="" disabled>
                --Seleccione un Veterinario--
              </option>
              <option className="text-xl" value="Dr. Jack">
                Dr. Jack
              </option>
              <option className="text-xl" value="Dra. Lisa">
                Dra. Lisa
              </option>
            </select>

            {errors.vet?.message && (
              <Error>
                <p>{errors.vet.message}</p>
              </Error>
            )}
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
              placeholder="Ejemplo: Hook, Dino, etc"
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
              {...register("pet")}
            />
            {errors.pet?.message && (
              <Error>
                <p>{errors.pet.message}</p>
              </Error>
            )}
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
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
              {...register("date")}
            />
            {errors.date?.message && (
              <Error>
                <p>{errors.date.message}</p>
              </Error>
            )}
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
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
              {...register("hour")}
            />
            {errors.hour?.message && (
              <Error>
                <p>{errors.hour.message}</p>
              </Error>
            )}
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
              type="time"
              name="details"
              placeholder="Ejemplo: Vacunación, checkeo"
              className="border-2 w-full p-2 mt-1 mb-0 placeholder-gray-400 rounded-md resize-none"
              {...register("details")}
            />
            {errors.details?.message && (
              <Error>
                <p>{errors.details.message}</p>
              </Error>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-primary w-100 fs-5"
            value="Agregar Turno"
          />
        </form>
      </div>
    </>
  );
};

export default FormularioTurnos;
