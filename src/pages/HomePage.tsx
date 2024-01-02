import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="home-container">
      <h1>
        If you want to run, run a mile with us. If you want to experience a
        different life, run a marathon with a community.
      </h1>
      <p>
        {" "}
        Add one mile everyday to your daily streak of running challenge and be
        part of the running community.{" "}
      </p>
      <Link className="link-button" to="/register">
        {" "}
        Find your buddy
      </Link>
    </div>
  );
}
