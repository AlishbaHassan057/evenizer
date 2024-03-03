import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewRegister } from "../redux/features/register/registerSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const AddRegister = () => {
  const { reerror, user } = useSelector((state) => ({
    reerror: state.auth.reerror,
    user: state.auth.user,
  }));

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    title: "",
    dated: "",
    event_acc: "private",
    location: "",
    duration: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      email,
      title,
      dated,
      event_acc,
      location,
      duration,
      number,
    } = formData;

    if (
      !username ||
      !email ||
      !title ||
      !dated ||
      !location ||
      !duration ||
      !number
    ) {
      toast.error("Please enter all fields!");
    } else {
      const userData = {
        username,
        email,
        title,
        dated,
        event_acc,
        location,
        duration,
        number,
      };

      if (reerror) {
        toast.error(reerror);
      }

      dispatch(addNewRegister(userData));
      setFormData({
        username: "",
        email: "",
        title: "",
        dated: "",
        event_acc: "private",
        location: "",
        duration: "",
        number: "",
      });
      // Show success message
      toast.success("Your event has been registered successfully!");
    }
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{
          width: "100%",
          backgroundColor: "#C9A0DC",
          height: "100vh",
          margin: "0px",
        }}
      >
        {/* User Info Box */}
        <div
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            backgroundColor: " red",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 1000,
          }}
        >
          {user && (
            <div className="text-white fw-bold">
              <h3 className="fw-bold text-center mb-4">Welcome Back!</h3>
              <p className="mb-2">Logged in as: {user.f_name}</p>
              <p>Email: {user.p_mail}</p>
            </div>
          )}
        </div>

        <div
          className="container"
          style={{
            width: "50%",
            backgroundColor: " #8A2BE2 ",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
            margin: "0.1rem auto",
            color: "white",
          }}
        >
          <div className="container-fluid">
            <h2 className="text-center fw-bold text-white">
              Registration for an Event
            </h2>
            <form className="" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control border-0"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Your Name"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control border-0"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Number"
                      style={{ outline: "none", border: "none" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label border-none">Event Date</label>
                    <input
                      type="text"
                      className="form-control border-0"
                      name="dated"
                      value={formData.dated}
                      onChange={handleChange}
                      placeholder="Event Date"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Location</label>
                    <textarea
                      className="form-control"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Location"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control border-0"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Event Title</label>
                    <input
                      type="text"
                      className="form-control border-0"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Title"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Event Duration</label>
                    <input
                      type="text"
                      className="form-control border-0"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="Duration"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label d-block">
                      Event Accessibility
                    </label>
                    <div className="d-flex flex-column">
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="event_acc"
                          value="private"
                          checked={formData.event_acc === "private"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label border p-2 bg-white">
                          Private
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="event_acc"
                          value="public"
                          checked={formData.event_acc === "public"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label border p-2 bg-white">
                          Public
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/"
                className="btn"
                style={{ width: "400px", margin: "0 auto", color: "white" }}
              >
                Register
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRegister;
