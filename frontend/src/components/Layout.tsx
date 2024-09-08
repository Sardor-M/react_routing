import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import FooterNew from "./FooterNew";
import styled from "styled-components";

const SiteWrapper = styled.div`
  min-height: 100vh;
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  /* flex: 1; */
  /* overflow: auto; */
  padding-top: 0; // no padding at the top
  position: relative; // to prevent content overlap
  z-index: 0; // content stays behind the navbar
`;

export default function Layout() {
  const location = useLocation();

  const showFooter =
    location.pathname === "/" ||
    location.pathname === "/homepage" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  // const fixedHeaderPosition =
  //   location.pathname === "/events" ||
  //   location.pathname === "/runner" ||
  //   location.pathname === "/login";
  return (
    <SiteWrapper>
      {<Navbar />}
      <ContentWrapper>{<Outlet />}</ContentWrapper>
      {showFooter && <FooterNew />}
    </SiteWrapper>
  );
}
