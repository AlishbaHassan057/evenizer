import React from "react";
import Navbar from "../homepage/navbar/Navbar";
import Slider from "../homepage/slider/Slider";
import "./about.css";
import AboutEvenizer from "../homepage/aboutevenizer/AboutEvenizer";
import Choose from "./Choose";
import Footer from "../homepage/footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div class="background-container">
        <h1 class="display-1 about-us-text">About Us</h1>
      </div>

      <AboutEvenizer />
      <Choose />
      <Footer />
    </>
  );
};

export default AboutUs;
