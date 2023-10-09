import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "./Error404.css"

const Error404 = () => {
  return ( 

    <div>
      <div className="container">
        <div className="row">
          <div className="containerError col-md-12">
      <Image className="imgError" src="./src/assets/dog.jpg" alt="Imagen 404" />
    </div>
    <div className="col-md-12">
      <p className="number text-center py-3 fw-bold">404</p>
      <p className="phrase text-center">
        Upsss!!! Nada puede salir mal.
      <p>PAGINA NO ENCONTRADA.</p>
      </p>
      <Button className="button-error text-center"><b>VOLVER A INICIO</b></Button>
      
      </div>
    </div>
  </div>
</div>


  )
}

export default Error404;