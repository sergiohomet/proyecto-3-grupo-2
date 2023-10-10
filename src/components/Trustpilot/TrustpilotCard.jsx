import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

const TrustpilotCard = ({ review }) => {
  return (
    <>
      <Card className="trustCard">
        <CardBody>
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <img
                src={`https://res.cloudinary.com/dhvgi2cmq/image/upload/v1696120142/patitas/trustPilotStars/${review.rating}.png`}
                alt="stars"
              />
            </div>
            <div className="col-6">{review.date}</div>
          </div>
          <div className="text-start">
            <p className="font-bold text-dark mb-1 text-gray-700">
              {review.title}
            </p>
            <p className="font-normal trustCard__review">{review.review}</p>
            <p className="font-normal">{review.name}</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default TrustpilotCard;
