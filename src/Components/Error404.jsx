import React from 'react'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "./Error404.css"

const Error404 = () => {
  return ( 
    <div className="main-container">
      <div className="container-img">
        <Image className="img mx-auto" src="./src/assets/dog.jpg" fluid ></Image>
          <p className="number mx-auto text-center">404
          </p>
      </div>
      <div className="container-phrase">
        <p className="container-error py-4">
          Upsss!!! Nada puede malir sal. 
          Página No Encontrada.
        </p>
        <Button className='button-error404'><b>PAGINA DE INICIO</b></Button>
        <div className="burbujas">
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
        </div>
      </div>
    </div>
   
  )
}

export default Error404;