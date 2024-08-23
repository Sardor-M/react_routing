import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FooterNew from "./FooterNew";
import styled from "styled-components";

const SiteWrapper = styled.div`
  min-height: 100vh;
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

export default function Layout() {
  return (
    <SiteWrapper>
      {<Navbar />}
      <ContentWrapper>{<Outlet />}</ContentWrapper>
      {<FooterNew />}
    </SiteWrapper>
  );
}
