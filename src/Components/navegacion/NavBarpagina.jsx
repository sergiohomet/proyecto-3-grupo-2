import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getUserData } from "../../hooks/getUserData";

const NavBarpagina = ({ setIsLogged, isLogged }) => {
  const navigate = useNavigate();

  const userData = getUserData();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    setIsLogged(false);
  };
  return (
    <>
      <Navbar expand="lg " className="navbar-container navbar-dark">
        <Container fluid>
          <Link to={"/"}>
            <img
              src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1697058067/patitas/patitasNav_sbn7yu.png"
              width={"70"}
              alt="Patitas Logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="visible text-white" id="navbarScroll">
            <Nav className="ms-auto" navbarScroll>
              <Link className="nav-link" to="/">
                Inicio
              </Link>
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>

              {!isLogged ? (
                <Link className="nav-link" to="/login">
                  Iniciar Sesion
                </Link>
              ) : userData &&
                (userData.rol === "admin" || userData.rol === "dueno") ? (
                <>
                  <Link className="nav-link" to="/admin">
                    Administracion{" "}
                  </Link>
                  <Link className="nav-link" to="/pacientes">
                    Pacientes
                  </Link>
                  <Link className="nav-link" to="/turnos">
                    Turnos
                  </Link>
                  {userData.rol === "dueno" && (
                    <Link className="nav-link" to="/usuarios">
                      Usuarios
                    </Link>
                  )}
                  <Link className="nav-link" onClick={logOut}>
                    Cerrar Sesion
                  </Link>
                </>
              ) : (
                userData.rol === "user" && (
                  <>
                    <Link className="nav-link" onClick={logOut}>
                      Cerrar Sesion
                    </Link>
                  </>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarpagina;
