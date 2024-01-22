import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function EventLayout() {
  return (
    <>
      <nav className="navbar-event">
        <NavLink
          to="/events"
          end
          className={({ isActive }) => (isActive ? "navbar-link" : "")}
        >
          Event
        </NavLink>
        <NavLink
          to="/events/dashboard"
          className={({ isActive }) => (isActive ? "navbar-link" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/events/upcoming"
          className={({ isActive }) => (isActive ? "navbar-link" : "")}
        >
          Upcoming
        </NavLink>
        <NavLink
          to="/events/review"
          className={({ isActive }) => (isActive ? "navbar-link" : "")}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
