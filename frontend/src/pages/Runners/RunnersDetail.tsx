import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Events } from "../../types";

export default function RunnersDetail() {
  const [runnerDetails, setRunnersDetails] = useState<Events>();
  const location = useLocation();
  const searchData = location.state?.search || "";
  // below is the same as the above line var declarion
  // above declaration is using the optional chaining operator in js
  const seachData1 = (location.state && location.state.search) || "";
  console.log("Search Data on the target side:", searchData);

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
      <Link to={`..${searchData}`} relative="path" className="back-button">
        &larr; <span>Back to all</span>
      </Link>
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
