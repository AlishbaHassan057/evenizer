import { useState } from "react";
import "./dash.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";

function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div
      className="grid-container"
      style={{
        backgroundColor: "#1d2634",
        color: "#9e9ea4",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home />
    </div>
  );
}

export default AdminDashboard;
