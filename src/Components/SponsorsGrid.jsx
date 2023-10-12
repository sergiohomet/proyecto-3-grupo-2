import React from "react";
import { sponsors } from "../data/sponsors";

const SponsorsGrid = () => {
  return (
    <>
      {sponsors.map((sponsor) => (
        <div key={sponsor.id} className="">
          <img className="" src={sponsor.src} key={sponsor.id} />
        </div>
      ))}
    </>
  );
};

export default SponsorsGrid;
