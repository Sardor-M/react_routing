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
    fetch("http://localhost:4000/api/events/upcoming")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setUpcomingEvents(data);
          console.log(data, "Data from the server!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const upcomingEventsData = upcomingEvents.map((runner) => {
    return (
      // <div key={runner.id} className="upcoming-title">
      <Link
        key={runner.id}
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
