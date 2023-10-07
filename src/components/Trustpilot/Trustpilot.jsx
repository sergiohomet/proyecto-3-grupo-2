import React from "react";
import TrustpilotGrid from "./TrustpilotGrid";
import { reviews } from "../../data/reviews";
import { getRating, getStars, getStarsLabel } from "../../helpers/trustpilot";

const Trustpilot = () => {
  return (
    <>
      <div className="row">
        <div className="col-3 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex">
            <h5 className="d-none d-sm-block">{getRating(reviews)}</h5>
            <p className="m-0 ms-1 me-1 d-none d-sm-block">•</p>
            <h5>{getStarsLabel(reviews)}</h5>
          </div>
          <div>
            <img
              src={`https://res.cloudinary.com/dhvgi2cmq/image/upload/v1696120142/patitas/trustPilotStars/${getStars(
                reviews
              )}.png`}
              alt="stars"
            />
          </div>
          <div>
            <p className="m-0 d-none d-sm-block">
              Based on<a className="ms-1 me-1">{reviews.length}</a>
              reviews
            </p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trustpilot_Logo_%282022%29.svg/1280px-Trustpilot_Logo_%282022%29.svg.png"
            alt="trustpilot logo"
            className="w-50"
          />
        </div>
        <div className="col-9">
          <TrustpilotGrid review={reviews} />
        </div>
      </div>
    </>
  );
};

export default Trustpilot;
