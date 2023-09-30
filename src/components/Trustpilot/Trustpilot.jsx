import React from "react";
import TrustpilotCard from "./TrustpilotCard";

const Trustpilot = () => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="d-flex flex-column align-items-center">
            <h5>Excellent</h5>
            <div>⭐⭐⭐⭐⭐</div>
            <div>
              <p className="m-0">
                Based on<a href="">number</a>reviews
              </p>
            </div>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trustpilot_Logo_%282022%29.svg/1280px-Trustpilot_Logo_%282022%29.svg.png"
              alt="trustpilot logo"
              className="w-25"
            />
          </div>
        </div>
        <div className="col-8">
          <TrustpilotCard />
        </div>
      </div>
    </>
  );
};

export default Trustpilot;
