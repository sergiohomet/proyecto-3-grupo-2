import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

const TrustpilotCard = ({ review }) => {
  return (
    <>
      <Card className=" mb-5">
        <CardBody>
          <div className="row">
            <div className="col-6">rating</div>
            <div className="col-6">date</div>
          </div>
          <div className="text-start">
            <p className="font-bold text-dark mb-1 text-gray-700">
              Titulo de la review
            </p>
            <p className="font-normal">detalles de la review</p>
            <p className="font-normal">usuario</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default TrustpilotCard;
