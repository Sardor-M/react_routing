import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import run_with_us from "../assets/images/run_with_us.png";

const HeaderElement = styled.header`
  /* position: fixed; */
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #ebff00;
  display: flex;
  align-items: center;
  padding-block: 40px;
  width: 100%;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  height: 60px;
`;

const SiteLogoWrapper = styled(Link)`
  color: #0f0f19;
  margin-right: auto;
  margin-left: 15px;
  padding-inline: 10px;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const SiteLogoImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: auto;
  font-weight: 1500;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #4d4d4d;
  font-weight: 600;
  padding: 5px 20px;
  transition: color 0.3s, text-decoration 0.3s;

  &.active {
    font-weight: bold;
    text-decoration: underline;
    color: #161616;
  }

  &:hover {
    color: #161616;
    text-decoration: underline;
  }
`;

const Loginicon = styled.img`
  height: 18px;
  width: 18px;
`;

export default function Navbar() {
  // const { toggleColorMode } = useContext(ColorModeContext);
  // const theme = useTheme();

  // const fixedHeaderPosition =
  //   location.pathname === "/events" ||
  //   location.pathname === "/createEvent" ||
  //   location.pathname === "/login";
  return (
    <HeaderElement>
      <SiteLogoWrapper to="/">
        <SiteLogoImg src={run_with_us} />
      </SiteLogoWrapper>
      <StyledNav>
        <StyledNavLink
          to="/homepage"
          // className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          to="/events"
          // className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Events
        </StyledNavLink>
        <StyledNavLink
          to="/runner"
          // className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Runner's Community
        </StyledNavLink>
        <StyledNavLink
          to="/createEvent"
          // className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Create an Event
        </StyledNavLink>

        <StyledNavLink
          to="login"
          // className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <Loginicon
            src="https://img.icons8.com/cotton/64/gender-neutral-user--v1.png"
            // alt="gender-neutral-user--v1"
            alt="user icon"
          />
        </StyledNavLink>
      </StyledNav>
    </HeaderElement>
  );
}
