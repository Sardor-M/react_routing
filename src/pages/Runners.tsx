import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Runner {
  id: number;
  name: string;
  email: string;
  location: string;
  distance: number;
  price: number;
  type: string;
  pace: number;
  time: number;
  description: string;
  imageUrl: string;
}

export default function Runners() {
  const [runners, setRunners] = useState<Runner[]>([]);

  useEffect(() => {
    fetch("/api/runners")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.runners)) {
          setRunners(data.runners);
        }
      });
  }, []);

  const runnersArray = runners.map((runner) => (
    <div key={runner.id} className="runner-title">
      {" "}
      <Link
        to={`/runner/${runner.id}`}
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
      <div className="runner-list">{runnersArray}</div>
    </div>
  );
}
