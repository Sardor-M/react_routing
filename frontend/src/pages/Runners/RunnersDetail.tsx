import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

interface RunnerDetails {
  type: string;
  pace: number;
  runner: string;
  price: number;
  time: number;
  description: string;
  imageUrl: string;
  name: string;
}

export default function RunnersDetail() {
  const [runnerDetails, setRunnersDetails] = useState<RunnerDetails>();

  const params = useParams();
  // console.log(params.id);

  useEffect(() => {
    fetch(`http://localhost:4000/api/runners/${params.id}`)
      // /api/runners/${params.id}
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
        setRunnersDetails(data.runner);
      });
  }, [params.id]);
 
  return (
    <div className="runner-detail-container">
      {runnerDetails ? (
        <div className="runner-detail">
          <img src={runnerDetails?.imageUrl} alt="runnerDetails?.name" />
          <i className={`runner-type ${runnerDetails?.type} selected`}>
            {runnerDetails?.type}
          </i>
          <h2> {runnerDetails?.name}</h2>
          <p className="runner-price">
            <span>${runnerDetails?.price}</span> /day
          </p>
          <p> {runnerDetails?.description}</p>
          <button className="link-button"> Join the team</button>
        </div>
      ) : (
        <h2> Loading ...</h2>
      )}
    </div>
  );
}
