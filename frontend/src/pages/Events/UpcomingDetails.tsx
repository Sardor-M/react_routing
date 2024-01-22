import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// challenge: build the shared UI portion of the detals page.  For now, get the data from the request `/api/events/upcoming/:id`
// and display the van, name, price and description.
interface EventsDetails {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export default function UpcomingDetails() {
  const [eventsDetails, setEventsDetails] = useState<EventsDetails[]>();

  const { id } = useParams<{ id: string }>();

  const urlPath = `http://localhost:4000/api/events/upcoming/${id}`;
  console.log(id, "ID OF THE EVENT");

  // console.log(id, ": params.id");

  useEffect(() => {
    fetch(urlPath)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, "Events detail from the server!");
        setEventsDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [urlPath]);

  const eventsDetailsData = eventsDetails?.map((event) => {
    console.log(event, "event");
    return (
      <div key={event.id} className="upcoming-event-details">
        <img src={event.imageUrl} alt={`Pic of ${event.name}`} />
        <h3> {event.name}</h3>
        <p> {event.id}</p>
        <p> ${event.price}</p>
        <p> {event.description}</p>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>UpcomingDetails</h1>
      {eventsDetailsData}
    </div>
  );
}
