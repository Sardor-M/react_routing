import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

// const SubNavbarStyled = styled(SubNavbar)`
//   text-decoration: none;
//   color: #4d4d4d;
//   font-weight: 500;
//   padding: 5px 20px;

//   &:hover {
//     color: #161616;
//     text-decoration: underline;
//     font-weight: 600;
//   }
// `;

const SubNavbarWrapper = styled.div`
  background-color: #f9f9fd;
  display: flex;
  padding: 20px;
  padding-left: 1ch;
  /* margin-left: 14px; */
`;

const CustomStyledNavbarLink = styled(NavLink)`
  text-decoration: none;
  color: #4d4d4d;
  font-weight: 500;
  padding: 5px 20px;

  &:hover {
    color: #161616;
    text-decoration: underline;
    font-weight: 600;
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
    color: #3966fb;
  }
`;

export default function EventLayout() {
  return (
    <>
      <SubNavbarWrapper>
        <CustomStyledNavbarLink
          to="/events"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Event
        </CustomStyledNavbarLink>
        <CustomStyledNavbarLink
          to="dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </CustomStyledNavbarLink>
        <CustomStyledNavbarLink
          to="upcoming"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Upcoming
        </CustomStyledNavbarLink>
        <CustomStyledNavbarLink
          to="review"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Reviews
        </CustomStyledNavbarLink>
      </SubNavbarWrapper>
      <Outlet />
    </>
  );
}
