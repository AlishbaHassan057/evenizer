import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./logg.css";
import { loginAdmin } from "../../redux/features/admin/adminSlice";

const LogForm = ({ setOpen }) => {
  const { isError, message, isSuccess } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    p_mail: "",
    password: "",
  });

  const { p_mail, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!p_mail || !password) {
      toast.error("Please enter all fields!");
    } else {
      if (isError) {
        toast.error(message);
      }
      const userData = {
        p_mail,
        password,
      };
      dispatch(loginAdmin(userData));
    }
  };
  useEffect(() => {
    // If isSuccess is true, navigate to "/admin"
    if (isSuccess) {
      navigate("/admin");
    }
  }, [isSuccess]);

  return (
    <>
      <form className="form-container custom-shadow w-75 mx-auto rounded shadow-lg px-4 py-4 bg-transparent position-relative ">
        <img
          width={"100px"}
          src="https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
        />

        <h3 className="text-white mx-auto text-center fw-bold">SIGN UP</h3>
        <label className="me-5 my-2">Username</label>
        <input
          className="form-control mt-3 border-0"
          type="email"
          name="p_mail"
          placeholder="Enter Your Email Address"
          value={p_mail}
          onChange={handleChange}
          required
        />

        <div>
          <label className="my-2">Password </label>
          <input
            className="form-control mt-3"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          className="btn mt-4 d-block mx-auto fw-bold"
          style={{ width: "100%" }}
        >
          LOGIN
        </button>

        <p className="forget mt-2 mb-0 text-secondary me-0 text-end fs-6 text-light">
          Forget Password?
        </p>
        <p className="mt-2 fw-normal text-white text-center">
          Are you a new User?{" "}
          <span>
            <a
              onClick={() => setOpen(true)}
              href="#"
              style={{ textDecoration: "none", fontSize: "1.3rem" }}
            >
              Sign Up
            </a>
          </span>
        </p>
      </form>
    </>
  );
};

export default LogForm;
