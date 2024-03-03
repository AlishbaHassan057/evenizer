import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./logo.css";

const Logo = () => {
  const logos = [
    "https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/wisconsin-logo-300x300.png",
    "https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/mark-focus-logo-300x300.png",
    "https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/three-angles-logo-300x300.png",
    "https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/mary-jane-logo-300x300.png",
    "https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/xoca-logo-300x300.png",
    "https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/carousel-logo-300x300.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="bg-logo container-fluid mb-5 mt-5">
        <div className="container w-75 mx-auto text-center">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="mt-5">
                <img
                  src={logo}
                  style={{ width: "50%" }}
                  alt={`Logo ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Logo;
