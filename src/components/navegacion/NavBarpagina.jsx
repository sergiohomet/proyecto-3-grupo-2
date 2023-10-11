import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const NavBarpagina = () => {
  const isLogged = localStorage.getItem("token");

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <Navbar expand="lg " className="navbar-container">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img src="./public/patitas_logo.png" width={"70"} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="visible" id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 mx-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">Inicio</Link>

              {!isLogged ? (
                <Link to="/login">Iniciar Sesion</Link>
              ) : (
                <>
                  <p></p>
                  <NavDropdown title="ADMIN" id="navbarScrollingDropdown">
                    <NavDropdown.Item to="/pacientes">
                      Administrar Pacientes
                    </NavDropdown.Item>
                    <NavDropdown.Item to="/turnos">
                      Administrar Turnos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut}>
                      Cerrar Sesion
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarpagina;
