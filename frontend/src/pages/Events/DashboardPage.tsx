import React, { useState } from "react";
import { Events } from "../../types";
import { getEvents } from "../../api/api";
import styled from "styled-components";

const DashBoardContainer = styled.div`
  padding: 10px;
  margin-bottom: 540px;
`;

export const loader = async () => {
  // added getEvents function to the loader for the purpose of testing,
  // but it is not used in the DashboardPage component
  return getEvents();
};

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<Events | null>(null);

  return (
    <DashBoardContainer>
      <h1>Dashboard page goes here</h1>
    </DashBoardContainer>
  );
}
