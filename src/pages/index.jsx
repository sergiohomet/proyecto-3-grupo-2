import React from "react";
import ServiciosGrid from "../Components/Servicios/ServiciosGrid";
import PlanesGrid from "../Components/Planes/PlanesGrid";
import Trustpilot from "../Components/Trustpilot/Trustpilot";
import SponsorsGrid from "../Components/SponsorsGrid";
import Weather from '../Components/Weather'

const Index = () => {
  return (
    <div className="backgroundColor p-1">
      <div className="d-flex justify-content-center container-fluid indexBackground">
        <div className="">
          <h3 className="text-start textoIndex">
            Dale a esas Patitas todo el amor que necesitan
          </h3>
          <p className="text-start textoIndex">
            <b>Nosotros</b> sabemos como ciudarlos.
          </p>
        </div>
        <div className=" d-flex align-items-center">
          <div className="m-auto displayNoneSm">
            <Weather />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column container mt-5">
        <h3 className="mb-2">Nuestros Servicios</h3>
        <div className="row">
          <ServiciosGrid />
        </div>
      </div>

      <div className=" d-flex flex-column mt-5">
        <div className="d-flex justify-content-center">
          <h3 className="mb-2 text-center">
            Elegí el plan que mas se adapte a tu <i>perrhijo</i>
          </h3>
        </div>
        <div className="mb-5 planesCont container-fluid">
          <PlanesGrid />
        </div>
      </div>
      <div className="container-fluid mb-5">
        <h3>Opiniones verificadas sobre Patitas</h3>
        <div className="container-fluid">
          <Trustpilot />
        </div>
      </div>
      <div className="container-fluid ">
        <div className="d-flex justify-content-center mb-5">
          <SponsorsGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;
