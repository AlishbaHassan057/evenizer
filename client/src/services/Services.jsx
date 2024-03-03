import React from "react";
import Navbar from "../homepage/navbar/Navbar";
import "./services.css";
import Cards from "../homepage/cards/Cards";
import Footer from "../homepage/footer/Footer";
import Pricing from "../homepage/pricing/Pricing";

const Services = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="services-container">
        <h1 className="services-text display-6 fw-bold">SERVICES</h1>
      </div>
      <Cards />
      <Pricing />
      <Footer />
    </>
  );
};

export default Services;
