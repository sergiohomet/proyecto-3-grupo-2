import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { pacientes } from "../../helpers/data";
import CarrouselPacientesCard from "./CarrouselPacientesCard";
import { Link } from "react-router-dom";

const CarrouselPacientes = () => {
  return (
    <>
      <div className="container">
        {pacientes && pacientes.length ? (
          <Carousel
          className="rounded-xl"
          autoplayDelay={7000}
          autoplay={true}
          loop={true}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="indigo"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 -translate-y-2/4"
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
              variant="text"
              color="indigo"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-1 -translate-y-2/4"
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
            {pacientes.map((paciente) => (
              <CarrouselPacientesCard key={paciente.id} paciente={paciente} />
            ))}
          </Carousel>
        ) : (
          <div>
            <p className="mt-10 text-3xl font-semibold">
              No hay {""}
              <span className="text-indigo-600 font-bold">Pacientes </span>
              disponibles aún
            </p>
            <p className="font-bold text-2xl">Comienza agregandolos</p>
          </div>
        )}
        <Link
          to={"/pacientes"}
          className="bg-indigo-600 p-2 px-5 text-2xl md:text-lg text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded transition-all no-underline"
        >
          {pacientes && pacientes.length ? "Ver Pacientes" : "Agregar Paciente"}
        </Link>
      </div>
    </>
  );
};

export default CarrouselPacientes;
