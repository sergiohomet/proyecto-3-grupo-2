import React, { useEffect } from "react";
import { servicios } from "../../data/servicios";
import ServiciosCards from "./ServiciosCards";

const ServiciosGrid = () => {
  return (
    <>
      {servicios.map((data) => (
        <div key={data.id} className="col-3">
          <ServiciosCards data={data} key={data.id} />
        </div>
      ))}
    </>
  );
};

export default ServiciosGrid;
