import React from "react";

const ServiciosCards = ({ data }) => {
  return (
    <>
      <div className="card">
        <img
          variant=""
          src={data.imagen}
          alt={data.titulo}
          className="card-img"
        />
        <h6 className="card-title text-center">{data.titulo}</h6>
        <div className="card-body">
          <p className="card-text text-sm">{data.descripcion}</p>
        </div>
      </div>
    </>
  );
};

export default ServiciosCards;
