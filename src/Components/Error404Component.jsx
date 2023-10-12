import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const Error404Component = () => {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row">
          <div className="containerError col-md-12">
            <Image
              className="imgError w-100"
              src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1697083321/patitas/cyn/dog_guzr4o.jpg"
              alt="Imagen 404"
            />
          </div>
          <div className="col-md-12 text-center">
            <h1 className="number text-center py-2 fw-bold">
              <span className="spanError">4</span>
              <span className="spanError">0</span>
              <span className="spanError">4</span>
            </h1>
            <p className="phrase text-center py-1">
              Upsss!!! Nada puede salir mal...
            </p>
            <p className="phraseError text-center">PAGINA NO ENCONTRADA.</p>

            <Button className="btn-primary">VOLVER A INICIO</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404Component;
