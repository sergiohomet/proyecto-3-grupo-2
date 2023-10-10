import React, { useEffect } from "react";
import { servicios } from "../../data/servicios";
import ServiciosCards from "./ServiciosCards";

const ServiciosGrid = () => {
  return (
    <>
      {servicios.map((data) => (
        <div key={data.id} className="serviciosCont col-6 col-sm-6 col-lg-3">
          <ServiciosCards data={data} key={data.id} />
        </div>
      ))}
    </>
  );
};

export default ServiciosGrid;
