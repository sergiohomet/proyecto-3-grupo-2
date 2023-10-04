import React from "react";
import ServiciosGrid from "../components/Servicios/ServiciosGrid";
import PlanesGrid from "../components/Planes/PlanesGrid";
import Trustpilot from "../components/Trustpilot/Trustpilot";
import Weather from "../components/Weather";

const Index = () => {
  return (
    <>
      <div className="row d-flex justify-content-center mt-5 container-fluid">
        <div className="col-2"></div>
        <div className="col-6">
          <h3>Dale a esas Patitas todo el amor que necesitan</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            reiciendis, dicta sequi eveniet hic facere?
          </p>
          <div className="btn btn-primary me-1">Reservar Turno</div>
          <div className="btn btn-secondary">Contactanos</div>
        </div>
        <div className="col-2">
          <Weather />
        </div>
        <div className="col-2"></div>
      </div>
      <div className="d-flex flex-column container mt-5">
        <h3 className="mb-2">Nuestros Servicios</h3>
        <div className="row">
          <ServiciosGrid />
        </div>
      </div>
      <div className="container-fluid mb-5">
        <h3>Opiniones verificadas sobre Patitas</h3>
        <div className="">
          <Trustpilot />
        </div>
      </div>
      <div className="container d-flex flex-column mt-5">
        <div className="d-flex justify-content-center">
          <h3 className="mb-2">
            Elegí el plan que mas le sirva a tu <i>perrhijo</i>
          </h3>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <PlanesGrid />
        </div>
      </div>
    </>
  );
};

export default Index;
