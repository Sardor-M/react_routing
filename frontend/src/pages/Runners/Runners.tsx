import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Events } from "../../types";
import { getEvents } from "../../api/api";

export function loader() {
  return <p> Runner's event goes here </p>;
}

export default function Runners() {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const type = queryParams.get("type");

  const [searchParams, setSearchParams] = useSearchParams();
  const [runners, setRunners] = useState<Events[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const typeFilter = searchParams.get("type") || "";
  // console.log("Type Filter: ", searchParams.toString());

  useEffect(() => {
    async function loadEvents() {
      setLoading(true);
      try {
        const data = await getEvents();
        setRunners(data as Events[]);
        // console.log(data, "Runners Page Data");
      } catch (err) {
        setError(err as null);
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  const displayRunner = typeFilter
    ? runners.filter((runner) => runner.type === typeFilter)
    : runners;

  const runnersArray = displayRunner.map((runner) => (
    <div key={runner.id} className="runner-title">
      {" "}
      <Link
        to={runner.id.toString()}
        aria-label={`View details for ${runner.name}`}
        // sending state object infos to the target component link
        state={{ search: `?${searchParams.toString()}`, type: runner.type }}
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

  const handleFilterChange = (key: string, value: string | null) => {
    setSearchParams((prevParams) => {
      value === null ? prevParams.delete(key) : prevParams.set(key, value);
      return prevParams;
    });
  };

  if (loading) {
    return <h1> Loading... </h1>;
  }
  if (error) {
    return <h1 aria-live="assertive">There was an error: {error}</h1>;
  }
  return (
    <div className="runner-list-container">
      <h1> Explore running communites around you.</h1>
      <div className="runner-list-filter-button">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`runner-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          {" "}
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`runner-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          {" "}
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`runner-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          {" "}
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="runner-type clear-filters"
          >
            {" "}
            Clear Filters
          </button>
        ) : null}
      </div>
      <div className="runner-list">{runnersArray}</div>
    </div>
  );
}
