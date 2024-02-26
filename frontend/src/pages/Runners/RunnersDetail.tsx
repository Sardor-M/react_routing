import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Events } from "../../types";

export default function RunnersDetail() {
  const [runnerDetails, setRunnersDetails] = useState<Events>();

  const params = useParams();

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
