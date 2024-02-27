import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-list">
      <h2>Sorry, the page you are looking for is not found</h2>
      <Link to="/">
        {" "}
        <button className="not-found">Return to Home</button>
      </Link>
    </div>
  );
}
