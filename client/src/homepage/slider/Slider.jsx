import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./slider.css";
import { MdOutlinePlayCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();
const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel "
      >
        <div className="carousel-inner ">
          {/* 1ST SLIDE */}
          <div className="carousel-item active ">
            <div className="carousel-content-wrapper">
              <img
                src="http://swankeventsboston.com/wp-content/uploads/2019/07/swank-events-boston-home-1-1.png"
                className=" carousel-img d-block w-100 h-50"
                alt="Second Slide"
              />
              <div className="col-lg-6 carousel-caption fw-bold d-none d-md-block position-absolute top-2 start-0">
                <h1
                  className="text-left display-4 fw-bold"
                  data-aos="fade-right"
                >
                  Let's Celebrate Your Events Festival Party With Us
                </h1>
                <p
                  className="col-lg-12 fw-normal text-white"
                  data-aos="fade-left"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="imgs d-flex align-items-center justify-content-around gap-4 position-absolute bottom-0 start-0">
              <div
                className=" button122  text-light py-3 rounded-3 fw-bold text-center"
                // style={{ paddingLeft: "10px" }}
                data-aos="fade-right"
              >
                LEARN MORE
              </div>
              <div className="button2">
                <button className="btns d-flex align-items-center justify-content-around gap-4">
                  <div className="watch" data-aos="fade-up">
                    {" "}
                    <MdOutlinePlayCircle size={45} />
                  </div>
                  <div className="w fw-normal" data-aos="fade-left">
                    WATCH INTRO
                  </div>{" "}
                </button>
              </div>
            </div>
          </div>
          {/* 2ND SLIDE */}
          <div className="carousel-item">
            <div className="carousel-content-wrapper">
              <img
                src="https://images7.alphacoders.com/133/1339451.png"
                className="carousel-img d-block w-100 h-100"
                alt="First Slide h-50"
              />

              <div className="col-lg-6 carousel-caption fw-bold d-none d-md-block position-absolute top-2 start-0">
                <h1
                  className="text-left display-4 fw-bold"
                  data-aos="fade-right"
                >
                  Let's Celebrate Your Events Festival Party With Us
                </h1>
                <p
                  className="col-lg-12 fw-normal text-white"
                  data-aos="fade-left"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat..
                </p>
              </div>
              <div className="imgs d-flex align-items-center justify-content-around gap-4 position-absolute bottom-0 start-0">
                <div className="button1">
                  <button
                    className="btn text-light px-5 py-3 rounded-3 fw-bold"
                    data-aos="fade-right"
                  >
                    {" "}
                    LEARN MORE
                  </button>
                </div>
                <div className="button2">
                  <button className="btns d-flex align-items-center justify-content-around gap-4">
                    <div className="watch" data-aos="fade-up">
                      {" "}
                      <MdOutlinePlayCircle size={45} />
                    </div>
                    <div className="fw-normal" data-aos="fade-left">
                      WATCH INTRO
                    </div>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 3RD SLIDE */}
          <div className="carousel-item">
            <div className="carousel-content-wrapper">
              <img
                src="https://www.aicaevents.com/wp-content/uploads/2020/09/Garden_birthday_party_decoration_by_aicaevents_TPG1closeup.jpg"
                className="carousel-img d-block w-100 h-100"
                alt="Third Slide"
              />
              <div className="col-lg-6 carousel-caption fw-bold d-none d-md-block position-absolute top-2 start-0">
                <h1
                  className="text-left display-4 fw-bold"
                  data-aos="fade-right"
                >
                  Let's Celebrate Your Events Festival Party With Us
                </h1>
                <p
                  className="col-lg-12 fw-normal text-white"
                  data-aos="fade-left"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="imgs d-flex align-items-center justify-content-around gap-4 position-absolute bottom-0 start-0">
              <div className="button2">
                <button className="btns d-flex align-items-center justify-content-around gap-4">
                  <div className="watch" data-aos="fade-up">
                    {" "}
                    <MdOutlinePlayCircle size={45} />
                  </div>
                  <div className="fw-norma" data-aos="fade-left" l>
                    WATCH INTRO
                  </div>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
