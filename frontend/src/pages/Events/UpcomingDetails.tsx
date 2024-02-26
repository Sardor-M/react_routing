import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { UpcomingEvents } from "../../types";


export default function UpcomingDetails() {
  // saving the fetched data as an object
  const [eventDetails, setEventsDetails] = useState<UpcomingEvents>();

  const { id } = useParams<{ id: string }>();
  const urlPath = `http://localhost:4000/api/events/upcoming/${id}`;

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

  return eventDetails ? (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back</span>
      </Link>
      <div className="upcoming-details-layout-container">
        <div className="upcoming-details">
          <img
            src={eventDetails?.imageUrl}
            alt={`Pic of ${eventDetails?.name}`}
          />
          <div className="upcoming-details-info-text">
            <i className={`runner-type runner-type ${eventDetails?.type}`}>
              {eventDetails?.type}
            </i>
            <h3> {eventDetails?.name}</h3>
            <h4> ${eventDetails?.price}</h4>
            {/* <p> {eventsDetails?.description}</p> */}
          </div>
        </div>

        <nav className="upcoming-event-details-nav">
          <NavLink
            to="."
            className={({ isActive }) => (isActive ? "navbar-link" : undefined)}
          >
            Details
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? "navbar-link" : undefined)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ eventDetails }} />
      </div>
    </section>
  ) : (
    <h2> Loading ...</h2>
  );
}

// const eventsDetailsData =
//   Array.from(eventsDetails) && eventsDetails.length > 0 ? (
//     eventsDetails.map((event) => {
//       return (
//         <div key={event.id} className="upcoming-event-details">
//           {/* <img src={event.imageUrl} alt={`Pic of ${event.name}`} /> */}
//           <h3> {event.name}</h3>
//           <p> ${event.price}</p>
//           <p> {event.description}</p>
//         </div>
//       );
//     })
//   ) : (
//     <p> No upcoming events found.</p>
//   );
