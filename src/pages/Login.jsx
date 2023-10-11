import { Formulario } from "../components/formulario";

const Login = ({ setIsLogged }) => {
  return (
    <div className="App">
      <Formulario setIsLogged={setIsLogged} />
    </div>
  );
};

export default Login;
