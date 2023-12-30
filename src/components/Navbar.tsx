import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/runner">Runners</Link>
      </nav>
    </header>
  );
}
