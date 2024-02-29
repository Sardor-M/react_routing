import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import { Events } from "../../types";
import { getEventDetails } from "../../api/api";

interface ParamsInterface {
  params: { id: string };
}
export function loader({ params }: ParamsInterface) {
  console.log("Runner Details Loader Data:", params);
  return getEventDetails({ id: params.id });
}

export default function RunnersDetail() {
  const params = useParams<{ id: string }>();
  const location = useLocation();
  const runnerDetails = useLoaderData() as Events;

  const searchData = location.state?.search || "";
  const type = location.state?.type || "";
  // console.log("Type of the event :", type);

  return (
    <div className="runner-detail-container">
      <Link to={`..${searchData}`} relative="path" className="back-button">
        &larr; <span>Back to {type}</span>
      </Link>

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
    </div>
  );
}
