import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Events } from "../../../types";
import styled from "styled-components";

const StyledHead = styled.h1`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default function Runners() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [runners, setRunners] = useState<Events[]>([]);

  const typeFilter = searchParams.get("type") || "";

  useEffect(() => {
    const fetchRunnersData = async () => {
      const response = await fetch("http://localhost:8080/api/runners");
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
            to={runner.id.toString()}
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
    : "No Data is received";

  const handleFilterChange = (key: string, value: string | null) => {
    setSearchParams((prevParams) => {
      value === null ? prevParams.delete(key) : prevParams.set(key, value);
      return prevParams;
    });
  };

  return (
    <div className="runner-list-container">
      <StyledHead> Explore running communities around you.</StyledHead>
      <div className="runner-list-filter-button">
        <button
          onClick={() => handleFilterChange("type", "marathon")}
          className={`runner-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          {" "}
          # Marathon
        </button>
        <button
          onClick={() => handleFilterChange("type", "short")}
          className={`runner-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          {" "}
          # Short Distance
        </button>
        <button
          onClick={() => handleFilterChange("type", "swimming")}
          className={`runner-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          {" "}
          # Swimming
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
