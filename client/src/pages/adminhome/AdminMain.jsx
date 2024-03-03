import React, { useEffect, useState } from "react";
import "./homes.css";
import LogAdmin from "./LogAdmin";
import RegAdmin from "./RegAdmin";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { loginAdmin } from "../../redux/features/admin/adminSlice";

const AdminMain = () => {
  const { isLoading, isError, message } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError, message]);
  useEffect(() => {
    // Add the class to the body element when the component mounts
    document.body.classList.add("body-login-form");

    // Remove the class from the body element when the component unmounts
    return () => {
      document.body.classList.remove("body-login-form");
    };
  }, []);

  return (
    <>
      {open && <RegAdmin setOpen={setOpen} />}
      <div className="rounded min-vh-100 container d-flex justify-content-center align-items-center">
        {/* <div className="row mx-auto"> */}
        {/* <div className="col-lg-6 d-block mx-auto text-center">
            {/* <div className="logo">
              <img
                width={"90%"}
                style={{ height: "100vh", objectFit: "contain" }}
                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=626&ext=jpg&ga=GA1.1.572023653.1706097989&semt=ais"
              />
            </div> */}
        {/* </div> */}
        <div className="col-lg-8 mx-auto">
          <LogAdmin
            setOpen={setOpen}
            handleSubmit={handleSubmit}
            setUsername={setUsername}
            setPassword={setPassword}
            username={username}
            password={password}
          />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default AdminMain;
