import { Card, CardBody } from "@material-tailwind/react";

const CarrouselPacientesCard = ({ paciente }) => {
  const { name, lastname, email, phone, pet, kind, breed } = paciente;

  return (
    <>
      <div className="container">
        <Card className="w-fit lg:w-9/12 mb-5 flex mx-auto">
          <CardBody>
            <div className="text-start">
              <h5 className="text-center font-bold text-dark">
                Datos del dueño
              </h5>
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Nombre:{" "}
                <span className="font-normal normal-case mt">{name}</span>
              </p>
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Apellido:{" "}
                <span className="font-normal normal-case">{lastname}</span>
              </p>
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Email: <span className="font-normal normal-case">{email}</span>
              </p>
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Teléfono:{" "}
                <span className="font-normal normal-case">{phone}</span>
              </p>

              <h5 className="text-center my-2 font-bold text-dark">
                Datos de la mascota
              </h5>
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Nombre: <span className="font-normal normal-case">{pet}</span>
              </p>
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Especie: <span className="font-normal normal-case">{kind}</span>
              </p>
              <p className="font-bold text-dark mb-1 text-gray-700 uppercase">
                Raza: <span className="font-normal normal-case">{breed}</span>
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CarrouselPacientesCard;
