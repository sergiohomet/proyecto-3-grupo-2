import React, { useEffect } from "react";
import { servicios } from "../../data/servicios";
import ServiciosCards from "./ServiciosCards";

const ServiciosGrid = () => {
  return (
    <>
      <div className="row">
        {servicios.map((data) => (
          <div className="col-6">
            <ServiciosCards data={data} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiciosGrid;
