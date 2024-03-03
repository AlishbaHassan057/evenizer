import React from "react";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";

import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <MdDashboardCustomize className="icon_header" /> EVENIZER
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/events">
            <BsFillArchiveFill className="icon" /> Events
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/register">
            <BsFillGrid3X3GapFill className="icon" /> Upcoming Events
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/clients">
            <BsPeopleFill className="icon" /> Clients
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/blogs">
            <BsListCheck className="icon" /> Blogs
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/reports">
            <BsMenuButtonWideFill className="icon" /> Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFillGearFill className="icon" /> Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
