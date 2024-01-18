import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Upcoming {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

export default function UpcomingEvent() {
  const [upcomingEvents, setUpcomingEvents] = useState<Upcoming[]>([]);

  useEffect(() => {
    fetch("/api/events/upcoming/runner")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.runner)) {
          setUpcomingEvents(data.runner);
          console.log(data.runner, "data.runner");
        }
      });
  }, []);

  const upcomingEventsData = upcomingEvents.map((runner) => {
    return (
      // <div key={runner.id} className="upcoming-title">
      <Link
        to={`/events/upcoming/${runner.id}`}
        aria-label={`View details for ${runner.name}`}
      >
        <div className="upcoming-event" key={runner.id}>
          <img src={runner.imgUrl} alt={`Pic of ${runner.name}`} />
          <div className="upcoming-event-info">
            <h3>{runner.name}</h3>
            <p>${runner.price}</p>
          </div>
        </div>{" "}
      </Link>
    );
  });

  return (
    <section>
      <h1 className="upcoming-event-title"> Upcomning Event's List</h1>
      <div className="upcoming-event-list">
        {upcomingEventsData.length > 0 ? (
          <section>{upcomingEventsData}</section>
        ) : (
          <h2> Loading ...</h2>
        )}
      </div>
    </section>
  );
}
