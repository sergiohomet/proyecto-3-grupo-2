import { Link } from "react-router-dom";

export function Formulario() {
  return (
    <section className="form-container mt-5">
      <h1>Login</h1>

      <form className="Formulario" 
        
      >
        <a className="letra-formulario no-underline">Email</a>
        <input 
            type="text" 
            placeholder="ej. ulises@gmail.com"
            className="text-white"
        />

        <a className="letra-formulario no-underline">Contraseña</a>
        <input 
            type="Password" 
            placeholder="123456789" 
            className="text-white"
        />

        <Link to={'/error404'} className="text-white font-bolder no-underline">Has olvidado la contraseña?</Link>

        <button className="btn-primary p-2 fs-5">Iniciar Sesión</button>
      </form>
      
    </section>
  );
}
