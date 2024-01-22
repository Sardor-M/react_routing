import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

interface EventsDetails {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  description: string;
}

export default function UpcomingDetails() {
  const [eventsDetails, setEventsDetails] = useState<EventsDetails[]>([]);

  const { id } = useParams<{ id: string }>();

  const urlPath = `http://localhost:4000/api/events/upcoming/${id}`;
  // console.log(id, "ID OF THE EVENT");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlPath);
        if (!response.ok) {
          throw new Error(`Http Error! status: ${response.status}`);
        }
        // console.log("Raw Response: ", response);
        const data = await response.json();
        setEventsDetails(data);
      } catch (error) {
        console.log("Error fetching the data" + error);
      }
    };
    fetchData();
  }, [urlPath]);

  // console.log(eventsDetails, "EVENTS DETAILS");
  console.log(eventsDetails, "EVENTS DETAILS Before return statement");
  const eventsDetailsData =
    Array.from(eventsDetails) && eventsDetails.length > 0 ? (
      eventsDetails.map((event) => {
        return (
          <div key={event.id} className="upcoming-event-details">
            {/* <img src={event.imageUrl} alt={`Pic of ${event.name}`} /> */}
            <h3> {event.name}</h3>
            <p> ${event.price}</p>
            <p> {event.description}</p>
          </div>
        );
      })
    ) : (
      <p> No upcoming events found.</p>
    );

  return (
    <div className="container">
      <h1>UpcomingDetails</h1>
      {eventsDetailsData}
    </div>
  );
}
