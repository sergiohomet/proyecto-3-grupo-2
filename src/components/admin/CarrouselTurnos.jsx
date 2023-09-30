import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { turnos } from "../../helpers/data";
import { Link } from "react-router-dom";
import CarrouselTurnosCard from "./CarrouselTurnosCard";
import useScreenSize from "../../hooks/useScreenSize";

const CarrouselTurnos = () => {
  const { width } = useScreenSize();

  const grupoTurnos = [];
  for (let i = 0; i < turnos.length; i += 3) {
    grupoTurnos.push(turnos.slice(i, i + 3));
  }

  return (
    <>
      {turnos && turnos.length ? (
        <div className="flex mx-auto">
          <Carousel
            className="rounded-xl"
            autoplay={true}
            autoplayDelay={7000}
            loop={true}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="filled"
                color="indigo"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4 hidden lg:block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="filled"
                color="indigo"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4 hidden lg:block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            {width >= 640 ? (
              (grupoTurnos.map((grupo, index) => (
                <div key={index} className="flex">
                  {grupo.map((turno) => (
                    <CarrouselTurnosCard key={turno.id} turno={turno} />
                  ))}
                </div>
              )))
            ) : (width >= 390 && width < 640 ? (  
              (turnos.map((turno) => (
                <CarrouselTurnosCard key={turno.id} turno={turno} />
              )))
            ) : null)}
          </Carousel>
        </div>
      ) : (
        <div>
          <p className="mt-10 text-3xl font-semibold">
            No hay {""}
            <span className="text-indigo-600 font-bold">Turnos </span>
            disponibles aún
          </p>
          <p className="font-bold text-2xl">Comienza agregandolos</p>
        </div>
      )}
      <Link 
        to={'/turnos'}
        className="bg-indigo-600 p-2 mb-10 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded transition-all no-underline">
        {turnos && turnos.length ? "Ver Turnos" : "Agregar Turnos"}
      </Link>
    </>
  );
};

export default CarrouselTurnos;
