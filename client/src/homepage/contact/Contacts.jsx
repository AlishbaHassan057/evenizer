import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import "./contact.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Contacts = () => {
  const [number, setNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      {/* CONTACT PAGE  */}
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-text display-6">CONTACT US</h1>
      </div>
      <div className="container mx-auto mb-5 col-lg-9">
        <div className="row gap-0">
          {/* RIGHT-SIDE */}
          <div className="contact-card col-lg-6 mt-5">
            <div className="contact-card card shadow border-0">
              <h2 className="ms-4 mt-5">Leave A Message</h2>
              <div className="contact-p col-lg-9 ms-4 text-secondary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore etdolore.
                </p>
              </div>
              {/* FORM */}
              <div className="row align-items-center gap-0">
                <div className="col-lg-5 ms-4">
                  <input
                    className="form-control mt-4 border-0"
                    type="text"
                    placeholder="Your First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-lg-5 mt-4">
                  <input
                    className="form-control border-0"
                    type="text"
                    placeholder="Your Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="col-lg-10 ms-4">
                <input
                  className="form-control border-0"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <div className="col-lg-10 ms-4 mb-5">
                <input
                  className="form-control border-0"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <br />
                <textarea
                  className="form-control border-0"
                  rows="4"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="btn contact-btn border-0 mb-5 d-block  mx-auto text-center fw-medium fs-1">
                {" "}
                Send Message
              </button>
            </div>
          </div>

          {/* LEFT SIDE */}
          <div className="col-lg-6 mt-5">
            <h5 className="contact-msg">Contact Us</h5>
            <h1 className="text-center">Get In Touch</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6 mt-3">
                <div className="contact-logo">
                  <SlLocationPin size={40} />
                </div>
                <h4>Location</h4>
                <p className="text-secondary">
                  Jl. Sunset Road No. 815, Kuta p
                </p>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="contact-logo">
                  <IoMailOpenOutline size={40} />
                </div>
                <h4>Email</h4>
                <p className="text-secondary">evenizer@domain.com</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mt-3">
                <div className="contact-logo">
                  <LuPhone size={40} />
                </div>
                <h4>Phone</h4>
                <p className="text-secondary">(+62) 81 2345 1234</p>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="contact-logo">
                  <FaRegClock size={40} />
                </div>
                <h4>Opening Hours</h4>
                <p className="text-secondary">
                  Mon - Fri : 09.00 AM - 18.00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
