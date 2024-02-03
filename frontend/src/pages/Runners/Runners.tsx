import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

interface Runner {
  id: number;
  name: string;
  price: number;
  type: string;
  description: string;
  imageUrl: string;
  upcomingId: string;
}

export default function Runners() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const [searchParams, setSearchParams] = useSearchParams();
  const [runners, setRunners] = useState<Runner[]>([]);

  const typeFilter = searchParams.get("type") || "";

  useEffect(() => {
    fetch("http://localhost:4000/api/runners")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data, "Received data from server!");
        if (Array.isArray(data)) {
          setRunners(data);
          console.log(data, "Data From Server!");
        }
      });
  }, []);

  const displayRunner = typeFilter
    ? runners.filter((runner) => runner.type === typeFilter)
    : runners;

  const runnersArray = displayRunner.map((runner) => (
    <div key={runner.id} className="runner-title">
      {" "}
      <Link
        to={`/runners/${runner.id}`}
        aria-label={`View details for ${runner.name}`}
      >
        <img src={runner.imageUrl} alt={runner.name} />
        <div className="runner-info">
          <h2>{runner.name}</h2>
          <p>
            ${runner.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`runner-type ${runner.type} selected`}>{runner.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="runner-list-container">
      <h1> Explore running communites around you.</h1>
      <div className="runner-type-filter">
        <Link to="?type=simple" className="runner-type simple">
          {" "}
          Simple{" "}
        </Link>
        <Link to="?type=luxury" className="runner-type luxury">
          {" "}
          Luxury{" "}
        </Link>
        <Link to="?type=rugged" className="runner-type rugged">
          {" "}
          Rugged{" "}
        </Link>
      </div>
      <div className="runner-list">{runnersArray}</div>
    </div>
  );
}
