import React from "react";
import TrustpilotCard from "./TrustpilotCard";
import { Carousel, IconButton } from "@material-tailwind/react";

const TrustpilotGrid = ({ review }) => {
  const reviewsGroups = [];
  for (let i = 0; i < review.length; i += 3) {
    reviewsGroups.push(review.slice(i, i + 3));
  }
  return (
    <>
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
          {reviewsGroups.map((group, index) => (
            <div key={index} className="flex justify-center items-center">
              {group.map((data, i) => (
                <div key={i} className="mr-5">
                  <TrustpilotCard review={data} />
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default TrustpilotGrid;
