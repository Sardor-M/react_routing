import {
  Link,
  LoaderFunction,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { Events } from "../../types";
import { getEventDetail } from "../../api/api";

// export const loader: LoaderFunction = async (loaderArgs) => {
//   const params = loaderArgs.params as RunnerDetailParams;
//   console.log("Runner Details Loader Data:", params.id);
//   return params.id ? getEventDetail(params.id) : null;
// };

// export const loader: LoaderFunction = async ({
//   params,
// }: {
//   params: RunnerDetailParams;
// }) => {
//   try {
//     const data = await getEventDetail(params.id);
//     return data;
//   } catch (error: any) {
//     return {
//       status: error.status,
//       statusText: error.statusText,
//       message: error.message,
//     };
//
// };

export const loader: LoaderFunction = async ({
  params,
}: {
  params: { id?: string };
}) => {
  try {
    // Convert the 'params.id' argument to a string
    const data = await getEventDetail(params.id ?? "");
    console.log("Fetched data from the GETEVENTDETAILS:", data);
    return data;
  } catch (error: any) {
    console.error("Error fetching events:", error);
    return null;
  }
};

console.log("DATA FROM HERE:", loader);

export default function RunnersDetail() {
  const location = useLocation();
  const runnerDetails = useLoaderData() as Events;

  const searchData = location.state?.search || "";
  const type = location.state?.type || "";

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
