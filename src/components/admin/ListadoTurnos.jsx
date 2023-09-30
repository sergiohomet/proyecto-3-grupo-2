import { turnos } from "../../helpers/data";
import Turnos from "./Turnos";

const ListadoTurnos = () => {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-3 md:mt-0">
        {turnos && turnos.length ? (
          <>
            <h2 className="font-black text-3xl text-center">
              Listado turnos
            </h2>

            <p className="text-lg">
              Administra los {""}
              <span className="text-indigo-600 font-bold text-xl">
                turnos
              </span>
            </p>

            {turnos.map((turno) => (
              <Turnos key={turno.id} turno={turno} />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay pacientes
            </h2>

            <p className="text-lg mt-5 mb-5">
              Comienza agregado turnos {""}
              <span className="text-indigo-600 font-bold text-xl">
                y aparecerán en este lugar
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ListadoTurnos;
