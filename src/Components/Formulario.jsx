import { Link, useNavigate } from "react-router-dom";
import { LOGIN_SCHEMA } from "../helpers/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../config/axiosInstance";
import { useState } from "react";
import Error from "../hooks/Error";

const Formulario = ({ setIsLogged }) => {
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
      setIsLogged(true);
    } catch (error) {
      console.log(error);
      setError({ status: true, message: error.response.data.mensaje });
      setLoad(false);
      reset();
      setTimeout(() => {
        setError({ status: true, message: "" });
      }, 5000);
    }
  };

  return (
    <section className="form-container">
      <h1>Login</h1>

      <form className="Formulario" onSubmit={handleSubmit(onSubmit)}>
        <label 
          className="text-white text-xl font-bold no-underline"
          htmlFor='username'
        >Email</label>
        <input
          id="username"
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

        <label 
          className="text-white text-xl font-bold no-underline"
          htmlFor='password'
        >Contraseña</label>
        <input
          id='password'
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
        {error.status ? (
          <Error>
            <p>{error.message}</p>
          </Error>
        ) : (
          <></>
        )}
        <Link to={"/error404"} className="no-underline text-white font-bold">
          Olvidaste la contraseña?
        </Link>
        {!error ? (
          <button
            alt='Iniciar sesion'
            className={
              !load
                ? "btn-primary p-2 text-white"
                : "btn-primary p-2 text-white disabled"
            }
          >
            {!load ? "Iniciar Sesión" : "Cargando..."}
          </button>
        ) : (
          <button
            alt='Iniciar sesion'
            className={
              !load
                ? "btn-primary p-2 text-white"
                : "btn-primary p-2 text-white disabled"
            }
          >
            {!load ? "Iniciar Sesión" : "Cargando..."}
          </button>
        )}
      </form>
    </section>
  );
}

export default Formulario;