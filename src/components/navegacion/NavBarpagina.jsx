import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBarpagina = () => {
  return (
    <>
        <Navbar expand="lg " className="navbar-container"  >
      <Container fluid>
        <Navbar.Brand href="#"> <img src='./public/patitas_logo.png'width={'70'} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='visible' id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            
            <NavDropdown className="text-white"   title="Turnos" id="navbarScrollingDropdown">
              <NavDropdown.Item className="letra-drop"   href="#action3">Clínica</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Peluquería 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Algun otro..
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Asistencia medica</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Peluquería de mascotas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Venta de Productos y alimentos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
            
        
              Registrarse
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBarpagina