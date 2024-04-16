import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import runner_logo from "../assets/images/runner_logo.png";

const HeaderElement = styled.header`
  height: 110px;
  display: flex;
  align-items: center;
  padding-block: 10px;
`;

const SiteLogoWrapper = styled(HeaderElement).attrs({ as: "a" })`
  color: black;
  margin-right: auto;
  padding-inline: 10px;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 80px;
`;

const SiteLogoImg = styled.img`
  width: 90px;
  height: 50px;
  margin-right: auto;
  font-weight: 1500;
`;

// const NavbarWrapper = styled.nav`
//   position: fixed;
//   display: flex;
//   align-items: center;
// `;

export default function Navbar() {
  // const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <HeaderElement>
      <Link className="site-logo" to="/">
        <SiteLogoWrapper>
          <SiteLogoImg src={runner_logo} />
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
        {/* <button onClick={toggleColorMode}>Toggle me</button> */}
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
