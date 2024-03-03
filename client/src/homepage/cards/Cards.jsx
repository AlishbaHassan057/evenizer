import React, { useEffect } from "react";
import "./card.css";
import SubCard from "./SubCard";
import "aos/dist/aos.css";
import AOS from "aos";

const YourComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <style>
        {`
          body {
            background-color: white;
          }
        `}
      </style>
      <div data-aos="fade-left">
        <div className="container mb-2">
          <div className="col-lg-9 text-center mx-auto fw-bold mt-5">
            <h5 className="our-services fw-bold mt-5">Our Services</h5>
            <h1 className="fw-bold">
              We Provide The Best Service For Your Event
            </h1>
          </div>
          <div className="col-lg-8 text-secondary text-center mx-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
        </div>

        <div className="cards-three container col-lg-10 d-block mx-auto">
          <div className="row cards-three ">
            <SubCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default YourComponent;
