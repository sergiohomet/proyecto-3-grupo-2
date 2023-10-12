import Formulario from '../Components/Formulario'

const Login = ({ setIsLogged }) => {
  return (
    <div className="mt-10 mb-5">
      <Formulario setIsLogged={setIsLogged} />
    </div>
  );
};

export default Login;
