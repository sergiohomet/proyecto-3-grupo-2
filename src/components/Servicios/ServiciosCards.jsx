import React from "react";

const ServiciosCards = ({ data }) => {
  return (
    <>
      <div className="card w-75">
        <img
          variant="top"
          src={data.imagen}
          alt={data.titulo}
          className="card-img"
        />
        <div className="card-img-overlay">
          <h5 className="card-title">{data.titulo}</h5>
          <p className="card-text">{data.descripcion}</p>
        </div>
      </div>
    </>
  );
};

export default ServiciosCards;
