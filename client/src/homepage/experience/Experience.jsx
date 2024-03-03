import React, { useState, useEffect } from "react";
import { PiHandshakeFill } from "react-icons/pi";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { BsHandThumbsUp } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import "./exp.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Experience = () => {
  const [projects, setProjects] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [serviceGuarantee, setServiceGuarantee] = useState(0);
  const [teamExperts, setTeamExperts] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 10000000000000000,
      easing: "ease-in-out",
      once: true,
    });

    const interval = setInterval(() => {
      // Increase the count by 1 every 10 milliseconds
      if (projects < 125) {
        setProjects((prevCount) => prevCount + 1);
      }
      if (happyCustomers < 200) {
        setHappyCustomers((prevCount) => prevCount + 1);
      }
      if (serviceGuarantee < 199) {
        setServiceGuarantee((prevCount) => prevCount + 1);
      }
      if (teamExperts < 99) {
        setTeamExperts((prevCount) => prevCount + 1);
      }

      // Stop counting when reaching the specified values
      if (
        projects === 125 &&
        happyCustomers === 200 &&
        serviceGuarantee === 199 &&
        teamExperts === 99
      ) {
        clearInterval(interval);
      }
    }, 10);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [projects, happyCustomers, serviceGuarantee, teamExperts]);

  return (
    <>
      <div className="container-fluid exp-iimagess mt-5">
        <div className="hp row mb-5 mx-auto text-center text-white align-items-center justify-content-around ">
          <div className="col-lg-3 mt-5" data-aos="fade-up">
            <div className="hp d-flex flex-column justify-content-start align-items-center mx-auto text-center text-white mt-2">
              <PiHandshakeFill size={50} color="purple" />
              <div className="d-flex align-items-center justify-content-around gap-2">
                <div className="digitsss">
                  <h2 className="mt-2">{projects}</h2>
                </div>
                <div className="digits-iw">
                  <FaPlus size={13} color="purple" />
                </div>
              </div>
              <h6 className="fw-bold">Projects Done</h6>
            </div>
          </div>
          <div className="col-lg-3 mt-5" data-aos="fade-up">
            <div className="d-flex flex-column justify-content-start align-items-center mt-2">
              <FaRegFaceLaughBeam size={50} color="purple" />
              <div className="d-flex align-items-center justify-content-around gap-2">
                <div className="digits-iw">
                  <h2 className="mt-2">{happyCustomers}</h2>{" "}
                </div>
                <div className="digits-iw">
                  <FaPlus size={13} color="purple" />
                </div>
              </div>
              <h6 className="fw-bold">Customer Happy</h6>
            </div>
          </div>
          <div className="col-lg-3 mt-5" data-aos="fade-up">
            <div className="d-flex flex-column justify-content-start align-items-center mt-2">
              <BsHandThumbsUp size={50} color="purple" />
              <div className="d-flex align-items-center justify-content-around gap-2">
                <div className="digits-iw">
                  {" "}
                  <h2 className="mt-2">{serviceGuarantee}</h2>{" "}
                </div>
                <div className="digits-iw">
                  <FaPlus size={13} color="purple" />
                </div>
              </div>
              <h6 className="fw-bold">Service Guarantee</h6>
            </div>
          </div>
          <div className="col-lg-3 mt-5" data-aos="fade-up">
            <div className="d-flex flex-column justify-content-start align-items-center mt-2">
              <IoIosPeople size={50} color="purple" />
              <div className="d-flex align-items-center justify-content-around gap-2">
                <div className="digits-iw">
                  <h2 className="mt-2">{teamExperts}</h2>{" "}
                </div>
                <div className="digits-iw">
                  <FaPlus size={13} color="purple" />
                </div>
              </div>
              <h6 className="fw-bold">Team Experts</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
