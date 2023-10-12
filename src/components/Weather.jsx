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
      {weather ? (
        <div className="card weather ms-3">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-4 p-0 d-flex flex-column text-center weather__day">
                <p className="m-0 text-capitalize">
                  <b>{weather.today.date}</b>
                </p>
                <img src={weather.today.icon} alt="icon" />
                <h6>{weather.today.temp}</h6>
              </div>
              <div className="col-4 p-0 d-flex flex-column text-center">
                <p className="m-0 p-0 text-capitalize">
                  <b>{weather.tomorrow.date}</b>
                </p>
                <img src={weather.tomorrow.icon} alt="icon" />
                <h6>{weather.tomorrow.temp}</h6>
              </div>
              <div className="col-4 p-0 d-flex flex-column text-center">
                <p className="m-0 text-capitalize">
                  <b>{weather.afterTomorrow.date}</b>
                </p>
                <img src={weather.afterTomorrow.icon} alt="icon" />
                <h6>{weather.afterTomorrow.temp}</h6>
              </div>
            </div>
          </div>{" "}
        </div>
      ) : (
        <div className="card weather ms-3">
          <div className="card-body p-0">
            <div className="row">
              <p>Error al obtener datos del clima</p>
            </div>
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default Weather;
