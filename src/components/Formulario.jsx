import { Link, useNavigate } from "react-router-dom";
import { LOGIN_SCHEMA } from "../helpers/validationSchema";
import Error from "./Error";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../config/axiosInstance";

export function Formulario() {
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
      const response = await axiosInstance.post("/login", data);
      localStorage.setItem("token", response.data.token);
      navigate("/admin");
    } catch (error) {
      console.log(error);
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

        <Link to={"/error404"} className="no-underline text-white font-bold">
          Olvidaste la contraseña?
        </Link>

        <button className="btn-primary p-2">Iniciar Sesión</button>
      </form>
    </section>
  );
}
