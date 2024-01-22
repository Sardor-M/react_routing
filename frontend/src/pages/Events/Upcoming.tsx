import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Upcoming {
  id: number;
  name: string;
  imageUrl: string;
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
          console.log(data, "useEffect: Data from the server!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const upcomingEventsData = upcomingEvents.map((event) => {
    // console.log(upcomingEvents, "upcomingEvents");
    return (
      <Link
        key={event.id}
        to={`/events/upcoming/${event.id}`}
        aria-label={`View details for ${event.name}`}
        className="upcoming-event-title"
      >
        <div className="upcoming-event-single" key={event.id}>
          <img src={event.imageUrl} alt={`Pic of ${event.name}`} />
          <div className="upcoming-event-info">
            <h3>{event.name}</h3>
            <p>${event.price}</p>
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
