import React, { useState } from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await subscribeToNewsletter(email);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid footer-container text-white d-block w-70 mx-auto">
      <div className="computer row align-items-center justify-content-center gap-0">
        {/* First */}
        <div className="col-lg-3 footer-item mt-5">
          <h5 className="footer-title">EVENIZER</h5>
          <p>
            Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
            eiusmod
          </p>
          <div className="row">
            <div className="icon-container col-lg-1 p-0">
              <PiMapPinFill size={20} />
            </div>
            <div className="address col-lg-10 p-0">
              <p>Jl. Sunset Road No.815, Kuta</p>
            </div>
          </div>
          <p>evenizer@domain.com</p>
          <p>(+62) 81 2345 1234</p>
        </div>
        {/* SECOND */}
        <div className="col-lg-3 mt-5 footer-item">
          <h5 className="footer-title">Quick Links</h5>
          <p>About Us</p>
          <p>Services</p>
          <p>Our Team</p>
          <p>Pricing</p>
          <p>Contact</p>
        </div>
        {/* THIRD */}
        <div className="col-lg-3 footer-item mt-5">
          <h5 className="footer-title">Useful Links</h5>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Disclaimer</p>
          <p>Support</p>
          <p>FAQ</p>
        </div>
        {/* FOURTH */}
        <div className="col-lg-3 footer-item mt-5">
          <h5 className="footer-title newsletter-title">NEWSLETTER</h5>
          <form className="newsletter-form mt-3" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              placeholder="Your Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="email-input py-2 px-1 rounded-start border-0"
            />
            <button className="submit-btn py-2 px-1 border-0" type="submit">
              Submit
            </button>
          </form>
          <p className="newsletter-desc">
            Lorem ipsum dolor sit amet, consectectur adipiscing elit, sed do
            eiusmod tempo
          </p>
          <div className="social-icons d-flex gap-4 align-items-center justify-content-center">
            <div className="facebook-icon">
              <FaFacebook size={20} color="purple" />
            </div>
            <div className="twitter-icon">
              <FaTwitter size={20} color="purple" />
            </div>
            <div className="instagram-icon">
              <FaInstagramSquare size={20} color="purple" />
            </div>
            <div className="youtube-icon">
              <FaYoutube size={20} color="purple" />
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="d-flex align-items-center justify-content-between">
          <div className="footer-text">
            <h6 className="footer-bottom-text">
              Event Planner & Organizer Template Kit by Jegtheme
            </h6>
          </div>
          <div className="copyright-text">
            <h6 className="footer-bottom-text">
              Copyright © 2023. All rights reserved.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
