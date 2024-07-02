import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { Events } from "../../../types";
import styled from "styled-components";

const UpcomingEventLayoutContainer = styled.div`
  background-color: white;
  padding: 24px;
  margin: 30px 26px;
  text-align: left;
`;
const UpcomingEventDetails = styled.div`
  display: flex;
  align-items: center;
`;

const EventDetailsImg = styled.img`
  height: 160px;
  border-radius: 5px;
  margin-right: 20px;
`;
const EventDetailsIntoText = styled.h3`
  margin-top: 24px;
  margin-bottom: 5px;
  font-size: 26px;
  font-weight: 700;
`;

const EventDetailsTypeText = styled.button`
  height: 34px;
  padding: 6px 26px;
  font-style: normal;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background-color: #ffead0;
  color: #4d4d4d;
  transition: 200ms all cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ffead0;
  }

  &:focus {
    outline: none;
  }

  &.selected {
    color: #ffead0;
  }
  &.simple:hover,
  &.simple.selected {
    background-color: #e17654;
  }

  &.rugged:hover,
  &.rugged.selected {
    background-color: #115e59;
  }

  &.luxury:hover,
  &.luxury.selected {
    background-color: #161616;
  }

  &.clear-filters {
    margin-left: -20px;
    height: 34px;
    padding: 6px 26px;
    font-style: normal;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    text-decoration: underline;
    background-color: transparent;
    color: #4d4d4d;
  }
`;

export default function UpcomingDetails() {
  // saving the fetched data as an object
  const [eventDetails, setEventsDetails] = useState<Events | null>(null);
  const { id } = useParams<{ id: string }>();

  const urlPath = `http://localhost:4000/api/events/upcoming/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlPath);
        if (!response.ok)
          throw new Error(`Http Error! status: ${response.status}`);
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
      <UpcomingEventLayoutContainer>
        <UpcomingEventDetails>
          <EventDetailsImg
            src={eventDetails?.imageUrl}
            alt={`Pic of ${eventDetails?.title}`}
          />
          <EventDetailsIntoText>
            <EventDetailsTypeText
              className={`runner-type runner-type ${eventDetails?.category}`}
            >
              {eventDetails?.category}
            </EventDetailsTypeText>
            <h3> {eventDetails?.title}</h3>
            <h4> ${eventDetails?.price}</h4>
            {/* <p> {eventsDetails?.description}</p> */}
          </EventDetailsIntoText>
        </UpcomingEventDetails>

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
      </UpcomingEventLayoutContainer>
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
