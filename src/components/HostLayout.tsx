import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <Outlet />
      <Link to="/event">Event</Link>
      <Link to="/event/dashboard">Dashboard</Link>
      <Link to="/event/review">Reviews</Link>
    </>
  );
}
