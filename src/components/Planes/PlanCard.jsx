import React from "react";
import { MdOutlineDone } from "react-icons/md";

const PlanCard = ({ data }) => {
  let { caracteristicas } = data;
  return (
    <>
      <div className="card">
        <h6 className="card-title text-center mt-3">{data.titulo}</h6>
        <div className="card-body">
          {caracteristicas.map((caracteristica, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-start"
            >
              <div className="d-flex text-start">
                <div>
                  <MdOutlineDone className="m-0 mt-1" />
                </div>
                <p className="m-0 ml-2 ">{caracteristica}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-2">
          <div className="btn btn-primary m-2">Mas informacion</div>
        </div>
      </div>
    </>
  );
};

export default PlanCard;
