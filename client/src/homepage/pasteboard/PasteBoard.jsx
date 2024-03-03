import React, { useEffect } from "react";
import { GiGlobeRing } from "react-icons/gi";
import "./pasteboard.css";
import { GiGlassCelebration } from "react-icons/gi";
import { FaCakeCandles } from "react-icons/fa6";
import "aos/dist/aos.css";
import AOS from "aos";

const PasteBoard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div className="pa pasteboard-cont container mt-4 mb-5">
        <div className="row">
          {/* 1ST */}
          <div className="pa col-lg-4" data-aos="fade-up-right">
            <div className="card wed-card shadow border-0">
              <div className="wed-head d-flex align-items-center justify-content-center gap-3 mt-4">
                <div className="ring">
                  <GiGlobeRing size={25} color="orange" />
                </div>
                <div className="wedding">
                  <h4 className="fw-bold m-0">Wedding Party</h4>
                </div>
              </div>
              <div className="wed col-lg-10 mt-2 text-secondary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
          {/* 2ND */}
          <div className="col-lg-4" data-aos="flip-up">
            <div className="card wed-card shadow border-0">
              <div className="wed-head d-flex align-items-center justify-content-center gap-3 mt-4">
                <div className="ring">
                  <FaCakeCandles size={25} color="orange" />
                </div>
                <div className="wedding">
                  <h4 className="fw-bold m-0">Birthday Party</h4>
                </div>
              </div>
              <div className="wed col-lg-10 mt-2 text-secondary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
          {/* 3RD */}
          <div className="col-lg-4" data-aos="fade-up-left">
            <div className="card wed-card shadow border-0">
              <div className="wed-head d-flex align-items-center justify-content-center gap-3 mt-4">
                <div className="ring">
                  <GiGlassCelebration size={35} color="orange" />
                </div>
                <div className="wedding">
                  <h4 className="fw-bold m-0">Party & Events</h4>
                </div>
              </div>
              <div className="wed col-lg-10 mt-2 text-secondary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasteBoard;
