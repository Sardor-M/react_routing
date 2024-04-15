import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: columnn;
  align-items: center;
  height: 100%;
`;

export const PageLayout: React.FC = () => {
  return (
    <Page>
      {/* <Header> */}
      <header>
        <main>
          <Outlet />
        </main>
        {/* </Header> */}
      </header>
    </Page>
  );
};
