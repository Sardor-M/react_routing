import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/home" className="navbar-brand">
        #Runhere
      </Link>
      <div className="container-fluid">
        <a href="navbar" className="navbar-brand">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/*<a className="nav-link active" aria-current="page" href="/">Home</a>*/}
            {/*<a className="nav-link" href="/about">About</a>*/}
            {/*<a className="nav-link" href="/login">Login</a>*/}
            {/*<a className="nav-link" href="/register">Register</a>*/}
            {/*<a className="nav-link" href="/dashboard">Dashboard</a>*/}
            {/*<a className="nav-link" href="/logout">Logout</a>*/}
          </div>
        </div>
      </div>
    </nav>
  );
}
