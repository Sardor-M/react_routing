import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Events } from "../../types";

export default function Runners() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [runners, setRunners] = useState<Events[]>([]);

  const typeFilter = searchParams.get("type") || "";

  useEffect(() => {
    const fetchRunnersData = async () => {
      const response = await fetch("http://localhost:4000/api/runners");
      const data = await response.json();
      if (Array.isArray(data)) {
        setRunners(data);
      }

      console.log("Receiving data:", data);
    };

    fetchRunnersData();
  }, []);

  const displayRunner = typeFilter
    ? runners.filter((runner) => runner.type === typeFilter)
    : runners;

  const runnersArray = displayRunner
    ? displayRunner.map((runner) => (
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
            <i className={`runner-type ${runner.type} selected`}>
              {runner.type}
            </i>
          </Link>
        </div>
      ))
    : "No Data is recieved";

  const handleFilterChange = (key: string, value: string | null) => {
    setSearchParams((prevParams) => {
      value === null ? prevParams.delete(key) : prevParams.set(key, value);
      return prevParams;
    });
  };

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
