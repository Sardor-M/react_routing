import React from "react";
import { Link } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="navbar-event">
        <Link to="/event">Event</Link>
        <Link to="/event/dashboard">Dashboard</Link>
        <Link to="/event/review">Reviews</Link>
      </nav>
    </>
  );
}
