import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const NavBarpagina = ({ setIsLogged, isLogged }) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    setIsLogged(false);
  };
  return (
    <>
      <Navbar expand="lg " className="navbar-container">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img
              src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1697058067/patitas/patitasNav_sbn7yu.png"
              width={"70"}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="visible" id="navbarScroll">
            <Nav className="ms-auto" navbarScroll>
              <Link className="nav-link" to="/">
                Inicio
              </Link>

              {!isLogged ? (
                <Link className="nav-link" to="/login">
                  Iniciar Sesion
                </Link>
              ) : (
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
                  <Link className="nav-link" onClick={logOut}>
                    Cerrar Sesion
                  </Link>
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
