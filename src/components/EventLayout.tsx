import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="navbar-event">
        <NavLink
          to="/event"
          end
          className={({ isActive }) => (isActive ? "navbar-link" : "")}
        >
          Event
        </NavLink>
        <NavLink
          to="/event/dashboard"
          className={({ isActive }) => (isActive ? "navbar-link" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/event/review"
          className={({ isActive }) => (isActive ? "navbar-link" : "")}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
