import React from "react";
import { MdCelebration } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { AiOutlineBook } from "react-icons/ai";
import { PiGuitarFill } from "react-icons/pi";
import { GiPartyFlags } from "react-icons/gi";
import { GiMagicHat } from "react-icons/gi";
import cardData from "./data";
import { FaArrowRightLong } from "react-icons/fa6";

const SubCard = () => {
  const iconComponents = {
    MdCelebration: MdCelebration,
    FaCameraRetro: FaCameraRetro,
    AiOutlineBook: AiOutlineBook,
    PiGuitarFill: PiGuitarFill,
    GiPartyFlags: GiPartyFlags,
    GiMagicHat: GiMagicHat,
  };

  return (
    <>
      {cardData.map((card) => (
        <div key={card.id} className="col-lg-4 mt-4">
          <div
            className="card about-card ps-5 border bg-light"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            style={{ marginBottom: "20px" }}
          >
            <div className=" mt-5">
              {React.createElement(iconComponents[card.icon], {
                size: 38,
                style: { color: card.color },
              })}
            </div>
            <h5 className="fw-bold">{card.title}</h5>
            <p className="col-lg-10 text-secondary">{card.description}</p>
            <a href={card.link} className="unstyled-link mb-5">
              Read More <FaArrowRightLong />
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default SubCard;
