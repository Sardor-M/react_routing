/**
 * Challenge 1: Create the Runners list page, Route, and Link
 *
 * 1. Create a Runners component in the "pages" directory. For now,
 *    just render <h1>Runners page goes here 🚐</h1>
 * 2. Create a Route for the Runners page on the /Runners route
 * 3. Add a Link in the nav bar to the Vans route
 */

/**
 * Challenge 2: Fetch and map over the data to display it on
 * the Runners page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 *
 * Hints:
 * 1. Use `fetch("/api/runners")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Runner {
  id: number;
  name: string;
  email: string;
  location: string;
  distance: number;
  pace: number;
  time: number;
  description: string;
  imageUrl: string;
}

export default function Runners() {
  const [runners, setRunners] = useState<Runner[]>([]);
  // const runnersArray = Object.values(runners);

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
      <img src={runner.imageUrl} alt={runner.name} />
      <div className="runner-info">
        <h2>{runner.name}</h2>
        <h3>{runner.location}</h3>
        <p>{runner.description}</p>
      </div>
    </div>
  ));

  return <>{runnersArray}</>;
}
