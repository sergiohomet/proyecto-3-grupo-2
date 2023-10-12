import React from "react";

const ServiciosCards = ({ data }) => {
  return (
    <>
      <div className="cardServicios card p-3 bg-tertiary ">
        <img
          variant=""
          src={data.imagen}
          alt={data.titulo}
          className="card-img cardServicios__img"
        />
        <p className="card-title text-center cardServicios__titulo">
          {data.titulo}
        </p>
      </div>
    </>
  );
};

export default ServiciosCards;
