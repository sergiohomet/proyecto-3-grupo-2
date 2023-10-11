import { Link, useNavigate } from "react-router-dom";
import { LOGIN_SCHEMA } from "../helpers/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../config/axiosInstance";
import { useState } from "react";
import Error from "../Components/Error";

export function Formulario() {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LOGIN_SCHEMA),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoad(true);
      const response = await axiosInstance.post("/login", data);
      console.log(response);
      response && setLoad(false);
      localStorage.setItem("token", response.data.token);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      setError({ status: true, message: error.message });
      setLoad(false);
      reset();
    }
  };

  return (
    <section className="form-container mt-5">
      <h1>Login</h1>

      <form className="Formulario" onSubmit={handleSubmit(onSubmit)}>
        <a className="letra-formulario font-bolder no-underline">Email</a>
        <input
          type="text"
          placeholder="ej. ulises@gmail.com"
          className="mb-0"
          {...register("username")}
        />
        {errors.username?.message && (
          <Error>
            <p>{errors.username.message}</p>
          </Error>
        )}

        <a className="letra-formulario font-bolder no-underline">Contraseña</a>
        <input
          type="Password"
          placeholder="123456789"
          className="mb-0"
          {...register("password")}
        />
        {errors.password?.message && (
          <Error>
            <p>{errors.password.message}</p>
          </Error>
        )}
        {error.status && (
          <Error>
            <p>{error.message}</p>
            <p>Intentelo mas tarde</p>
          </Error>
        )}
        <Link to={"/error404"} className="no-underline text-white font-bold">
          Olvidaste la contraseña?
        </Link>
        {!error ? (
          <button
            className={!load ? "btn-primary p-2" : "btn-primary p-2 disabled"}
          >
            {!load ? "Iniciar Sesión" : "Cargando..."}
          </button>
        ) : (
          <button
            className={!load ? "btn-primary p-2" : "btn-primary p-2 disabled"}
          >
            {!load ? "Iniciar Sesión" : "Cargando..."}
          </button>
        )}
      </form>
    </section>
  );
}
