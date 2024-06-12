import { useEffect, useState } from "react";
import { Events } from "../../../types";
import { getEvents } from "../../../api/api";
import styled from "styled-components";

const DashBoardContainer = styled.div`
  padding: 10px;
  margin-bottom: 540px;
`;

export const loader = async () => {
  // added getEvents function to the loader for the purpose of testing,
  // but it is not used in the DashboardPage component
  console.log("Loader is working: ", getEvents());
  return await getEvents();
};

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState<Events | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const events = await getEvents();
        setDashboard(events);
      } catch (err) {
        setError("Failed to fetch the events");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  return isLoading ? (
    <div> Loading ...</div>
  ) : (
    <DashBoardContainer>
      {dashboard && (
        <div>
          <pre>{JSON.stringify(dashboard, null, 2)}</pre>
        </div>
      )}
    </DashBoardContainer>
  );
}
