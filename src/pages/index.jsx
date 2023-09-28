import React from "react";
import ServiciosGrid from "../components/Servicios/ServiciosGrid";

const Index = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div>
          <h3>Dale a esas Patitas todo el amor que necesitan</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            reiciendis, dicta sequi eveniet hic facere?
          </p>
          <div className="btn btn-primary">Reservar Turno</div>
          <div className="btn btn-secondary">Contactanos</div>
        </div>
      </div>
      <div className="d-flex flex-column container">
        <h3>
          Elegí el plan que mas le sirva a tu <i>perrhijo</i>
        </h3>
      </div>
      <div className="d-flex flex-column container">
        <h3>Nuestros Servicios</h3>
        <div>
          <ServiciosGrid />
        </div>
      </div>
    </>
  );
};

export default Index;
