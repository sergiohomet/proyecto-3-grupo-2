import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Error from "./Error";
import { CONTACTO_SCHEMA } from "../helpers/validationSchema";
import Swal from "sweetalert2";

const ContactoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CONTACTO_SCHEMA),
  });

  const onSubmit = (data) => {

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu Email a sido enviado correctamente",
      showConfirmButton: true,
    });
    reset();
  };

  return (
    <div className="registro-container md:w-1/2 mb-3 mt-3 p-4 md:rounded-lg mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="registro w-100 rounded-lg"
      >
        <div className="w-100">
          <label className="text-start text-white text-xl mb-2">Nombre</label>
          <input
            type="text"
            className="form-control mb-0"
            placeholder="Ejemplo: Ulises"
            name="name"
            {...register("name")}
          />
          {errors.name?.message && (
            <Error>
              <p>{errors.name.message}</p>
            </Error>
          )}
        </div>

        <div className="w-100">
          <label className="text-start text-white text-xl mb-2">Apellido</label>
          <input
            type="text"
            className="form-control mb-0"
            placeholder="Ejemplo: Burgos"
            name="lastname"
            {...register("lastname")}
          />
          {errors.lastname?.message && (
            <Error>
              <p>{errors.lastname.message}</p>
            </Error>
          )}
        </div>

        <div className="w-100">
          <label className="text-start text-white text-xl mb-2">Email</label>
          <input
            type="email"
            className="form-control mb-0"
            placeholder="Ejemplo: chapulin@gmail.com"
            name="username"
            {...register("username")}
          />
          {errors.username?.message && (
            <Error>
              <p>{errors.username.message}</p>
            </Error>
          )}
        </div>

        <div className="w-100">
          <label className="text-start text-white text-xl mb-2">Mensaje</label>
          <textarea
            className="form-control resize-none"
            placeholder="Hola Patitas..."
            name="message"
            {...register("message")}
          />
          {errors.message?.message && (
            <Error>
              <p>{errors.message.message}</p>
            </Error>
          )}
        </div>

        <button 
          type="submit"
          className="btn btn-warning mt-1 w-100 fs-5 font-bolder"
        >
          Enviar Formulario
        </button>
      </form>
    </div>
  );
};

export default ContactoForm;
