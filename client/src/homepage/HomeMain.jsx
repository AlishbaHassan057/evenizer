import React from "react";
import About from "./about/About";
import Cards from "./cards/Cards";
import Experience from "./experience/Experience";
import Logo from "./logo/Logo";
import Team from "./team/Team";
import Pricing from "./pricing/Pricing";
import Footer from "./footer/Footer";
import PasteBoard from "./pasteboard/PasteBoard";
import Navbar from "./navbar/Navbar";
import Join from "./join/Join";

import Testimonials from "./testimonials/Testimonials";
import Slider from "./slider/Slider";

const HomeMain = () => {
  return (
    <div>
      <Navbar />
      <Slider />

      <PasteBoard />
      <About />
      <Cards />
      <Experience />

      <Logo />
      <Team />
      <Pricing />
      <Join />
      <Testimonials />

      <Footer />
    </div>
  );
};

export default HomeMain;
