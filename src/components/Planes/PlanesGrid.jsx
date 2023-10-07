import React from "react";
import PlanCard from "./PlanCard";
import { planes } from "../../data/planes";

const PlanesGrid = () => {
  return (
    <>
      {planes.map((data) => {
        return <PlanCard data={data} key={data.id} />;
      })}
    </>
  );
};

export default PlanesGrid;
