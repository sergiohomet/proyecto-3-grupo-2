import React, { useEffect, useState } from "react";
import axiosInstance from "../config/axiosInstance";

const SponsorsGrid = () => {
  const [sponsors, setSponsors] = useState([]);

  const loadSponsors = async () => {
    try {
      const response = await axiosInstance.get("/sponsors");
      const { sponsors } = response.data;
      setSponsors(sponsors);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadSponsors();
  }, []);
  return (
    <>
      {sponsors &&
        sponsors.map((sponsor, index) => (
          <div key={index} className="">
            <img
              className=""
              src={sponsor.src}
              key={sponsor.id}
              alt={sponsor.alt}
            />
          </div>
        ))}
    </>
  );
};

export default SponsorsGrid;
