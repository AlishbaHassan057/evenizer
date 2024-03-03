import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <>
      <div className="container-fluid navv">
        <div className="nav-w d-flex gap-0 align-items-center justify-content-between text-white py-3">
          <div className="logo-brand">
            <img
              style={{ width: "200px" }}
              src="https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/Evenizer-logo-2.png"
              alt="Brand Logo"
            />
          </div>

          <div className="hamburger-icon d-lg-none">
            <FaBars
              size={24}
              onClick={toggleSidebar}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="regular-items d-none d-lg-flex align-items-center">
            <ul className="navlinks list-unstyled d-flex align-items-center gap-4 p-0 m-0">
              <li>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/s"
                  onClick={toggleSidebar}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  EVENTS
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  BLOGS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={toggleSidebar}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {showSidebar && (
            <>
              <div
                className="vh-100 vw-100 bg-dark position-fixed top-0 left-0"
                style={{ opacity: 0.8, filter: "blur(100px)" }}
              ></div>
              <div className="sidebar" ref={sidebarRef}>
                <ul className="list-unstyled d-flex flex-column gap-4 p-0 m-0">
                  <li>
                    <Link
                      to="/"
                      onClick={toggleSidebar}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/aboutus"
                      onClick={toggleSidebar}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/serv"
                      onClick={toggleSidebar}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/page"
                      onClick={toggleSidebar}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      BLOGS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={toggleSidebar}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      CONTACT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      onClick={toggleSidebar}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      SIGNUP
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}

          <div className="button0">
            <Link to="/startup">
              <button className="btn laptop fs-6 rounded-3 fw-bold">
                <span>GET</span> REGISTERED
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
