import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import run_with_us from "../assets/images/run_with_us.png";
const HeaderElement = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #ebff00;
  /* height: 110px; */
  display: flex;
  align-items: center;
  padding-block: 10px;
`;

const SiteLogoWrapper = styled(HeaderElement).attrs({ as: "a" })`
  color: #0f0f19;
  margin-right: auto;
  padding-inline: 10px;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 80px;
`;

const SiteLogoImg = styled.img`
  width: 100px;
  height: 100px;
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
          <SiteLogoImg src={run_with_us} />
        </SiteLogoWrapper>
      </Link>
      <nav>
        <NavLink
          to="/homepage"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
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
          Runner's Community
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Contact
        </NavLink> */}
        <NavLink
          to="/createAnEvent"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Create an Event
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
