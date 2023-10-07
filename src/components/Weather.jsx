import React, { useEffect, useState } from "react";
import { getWeather } from "../helpers/getWeather";

const Weather = () => {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getWeather();
        setWeather(data);
      } catch (error) {
        console.error("Error al obtener datos climáticos:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {weather && (
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column text-center">
                <h5>¿gorra o piloto?</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-4 d-flex flex-column text-center">
                <p className="m-0 text-capitalize">{weather.today.date}</p>
                <img src={weather.today.icon} alt="icon" />
                <h6>{weather.today.temp}</h6>
                <div className="d-flex ">
                  <p className="m-0 me-1">{weather.today.min}</p>
                  <p className="m-0 ms-1">{weather.today.max}</p>
                </div>
              </div>
              <div className="col-4 d-flex flex-column text-center">
                <p className="m-0 text-capitalize">{weather.tomorrow.date}</p>
                <img src={weather.tomorrow.icon} alt="icon" />
                <h6>{weather.tomorrow.temp}</h6>
                <div className="d-flex ">
                  <p className="m-0 me-1">{weather.tomorrow.min}</p>
                  <p className="m-0 ms-1">{weather.tomorrow.max}</p>
                </div>
              </div>
              <div className="col-4 d-flex flex-column text-center">
                <p className="m-0 text-capitalize">
                  {weather.afterTomorrow.date}
                </p>
                <img src={weather.afterTomorrow.icon} alt="icon" />
                <h6>{weather.afterTomorrow.temp}</h6>
                <div className="d-flex ">
                  <p className="m-0 me-1">{weather.afterTomorrow.min}</p>
                  <p className="m-0 ms-1">{weather.afterTomorrow.max}</p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default Weather;
