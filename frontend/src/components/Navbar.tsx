import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import runner_logo from "../assets/images/runner_logo.png";

// header {
//   height: 110px;
//   display: flex;
//   align-items: center;
//   padding-block: 10px;
// }
//
// header .site-logo {
//   color: black;
//   margin-right: auto;
//   text-transform: uppercase;
//   font-weight: 900;
//   font-size: 35px;
// }
//
// a.active-link {
//   font-weight: bold;
//   text-decoration: underline;
//   color: #161616;
// }
//
// header a {
//   text-decoration: none;
//   color: #4d4d4d;
//   font-weight: 600;
//   padding: 5px 20px;
// }
//
// header a:hover {
//   color: #161616;
//   text-decoration: underline;
// }
//
// header .login-icon {
//   height: 18px;
//   width: 18px;
// }

const HeaderElement = styled.header`
    height: 110px;
    display: flex;
    align-items: center;
    padding-block: 10px;
`

const SiteLogoWrapper = styled(HeaderElement).attrs({as: "a"})`
    color: black;
    margin-right: auto;
    padding-inline: 10px;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 80px;
`

const SiteLogoImg = styled.img`
     width:110px;
     height: 60px;
     margin-right: auto;
     font-weight: 1500;
`

export default function Navbar() {
  return (
    <HeaderElement>
      <Link className="site-logo" to="/">
        <SiteLogoWrapper>
          <SiteLogoImg
            src={runner_logo}
            />
        </SiteLogoWrapper>
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
    </HeaderElement>
  );
}
