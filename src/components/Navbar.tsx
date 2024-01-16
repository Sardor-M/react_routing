import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #RunWithUs
      </Link>
      <nav>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/event"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Events
        </NavLink>
        <NavLink
          to="/runner"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Runners
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
