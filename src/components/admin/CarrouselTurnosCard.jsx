import { Card, CardBody } from "@material-tailwind/react";

const CarrouselTurnosCard = ({ turno }) => {
  const { vet, pet, date, hour, details } = turno;

  return (
    <>
      <div className="container">
        <Card className="lg:w-4/6 mb-5 flex mx-auto">
          <CardBody>
            <div className="text-start">
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Veterinario:{" "}
                <span className="font-normal normal-case mt">{vet}</span>
              </p>
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Mascota: <span className="font-normal normal-case">{pet}</span>
              </p>
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Fecha: <span className="font-normal normal-case">{date}</span>
              </p>
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Hora: <span className="font-normal normal-case">{hour}</span>
              </p>
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Detalles:{" "}
                <span className="font-normal normal-case">{details}</span>
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CarrouselTurnosCard;
