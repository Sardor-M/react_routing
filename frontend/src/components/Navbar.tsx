import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import run_with_us from "../assets/images/run_with_us.png";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";

const HeaderElement = styled(motion.header)`
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

// if the user is slciked ont he event navbar link, the link should be blue color
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
  transform-style: preserve-3d;
  backface-visibility: hidden;

  &.active {
    font-weight: bold;
    text-decoration: underline;
    color: #161616;
  }

  &:hover {
    color: #161616;
    text-decoration: underline;
  }

  &.isActive {
    color: #3966fb;
  }
`;

// cretea cool framer motion animation effect for the user login icon on the navbar
const UserIcon = styled(motion.span)`
  font-size: 18px;
  color: #4d4d4d;
  margin-right: 2px;
  padding: 5px 2px;
  cursor: pointer;

  /* &:hover {
    color: #161616;
    text-decoration: underline;
  } */
`;

const AnimatedNavLink = ({
  to,

  children,
  ...props
}: {
  to: string;

  children: React.ReactNode;
}) => (
  <motion.div
    whileHover={{ rotateY: 20 }}
    transition={{ duration: 0.3 }}
    style={{ display: "inline-block " }}
  >
    <StyledNavLink to={to} {...props}>
      {children}
    </StyledNavLink>
  </motion.div>
);

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
        <AnimatedNavLink
          to="/homepage"
          // className={({ isActive }) => (isActive ? "active-link" : "")} // wont work
        >
          Home
        </AnimatedNavLink>
        <AnimatedNavLink to="/events">Events</AnimatedNavLink>
        <AnimatedNavLink to="/runner">Runner's Community</AnimatedNavLink>
        <AnimatedNavLink to="/createEvent">Create an Event</AnimatedNavLink>
        <AnimatedNavLink to="/login">
          <UserIcon
            whileHover={{ scale: 1.8, color: "#bfbbbb" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <FaRegUser />
          </UserIcon>
        </AnimatedNavLink>
      </StyledNav>
    </HeaderElement>
  );
}
