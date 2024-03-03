import React from "react";
import { Link } from "react-router-dom";
import "./up.css";

const Startup = () => {
  const bgStyle = {
    backgroundImage: `url('https://img.freepik.com/free-vector/abstract-red-circle-black-background-technology_1142-9839.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=ais')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="container-fluid toppy" style={bgStyle}>
        <div className="container mx-auto sta ">
          <div className="row">
            <div className="startup text-center">
              <div className="col-lg-5 ">
                <div className="d-flex align-items-center gap-2 startup-item  border px-4 bg-black text-white text-center py-3 minis">
                  <div className="client text-center ms-5">
                    {" "}
                    <h2 className="my-2">Are you a client?</h2>
                  </div>
                  <div className="lclient">
                    {" "}
                    <Link to="/login" className="link fs-5 mb-0 mt-3 border-0">
                      Sign up here
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-4">
                <div className="d-flex align-items-center gap-2 startup-item  border px-4 bg-black text-white text-center py-3">
                  <div className="client text-center ms-5">
                    {" "}
                    <h2 className="my-2">Are you an Admin?</h2>
                  </div>
                  <div className="lclient">
                    {" "}
                    <Link
                      to="/adminlogin"
                      className="link fs-5 mb-0 mt-3 border-0"
                    >
                      Sign up here
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Startup;
