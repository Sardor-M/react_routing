import { Link, useLocation, useParams } from "react-router-dom";
import { Events } from "../../../types";
import { useEffect, useState } from "react";
import styled from "styled-components";

const RunnerDetailContainer = styled.div`
  padding: 27px;
`;

export default function RunnersDetail() {
  const [runnerDetails, setRunnerDetails] = useState<Events>();

  const location = useLocation();
  const { id } = useParams();
  console.log("Location:", location);

  useEffect(() => {
    const fetchRunnersDetails = async () => {
      const response = await fetch(`http://localhost:4000/api/runner/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data details.");
      }
      const data = await response.json();
      // if (Array.isArray(data)) {
      //   setRunnerDetails(data[0]);
      // }
      setRunnerDetails(data[0]);
      console.log("Runner Details: ", runnerDetails);
    };
    fetchRunnersDetails().then((r) =>
      console.log("Runner Details fetched: ", r)
    );
  }, [id, runnerDetails]);

  const searchData = location.state?.search || "";
  const type = location.state?.type || "";

  return (
    <RunnerDetailContainer>
      <Link to={`..${searchData}`} relative="path" className="back-button">
        &larr; <span>Back to {type}</span>
      </Link>

      <div className="runner-detail">
        <img src={runnerDetails?.imageUrl} alt={runnerDetails?.title} />
        <i className={`runner-type ${runnerDetails?.category} selected`}>
          {runnerDetails?.category}
        </i>
        <h2> {runnerDetails?.title}</h2>
        <p className="runner-price">
          <span>${runnerDetails?.price}</span> /day
        </p>
        <p> {runnerDetails?.description}</p>
        <button className="link-button"> Join the team</button>
      </div>
    </RunnerDetailContainer>
  );
}
