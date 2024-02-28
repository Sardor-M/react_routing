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
          to="/events"
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
        <NavLink
          to="login"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <img
            width="22"
            height="22"
            src="https://img.icons8.com/cotton/64/gender-neutral-user--v1.png"
            alt="gender-neutral-user--v1"
          />
        </NavLink>
      </nav>
    </header>
  );
}
