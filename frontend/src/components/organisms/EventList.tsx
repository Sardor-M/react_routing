// Organisms/EventCard.tsx
import React, { useState } from "react";
import { EventCard } from "../molecules/EventCard";
import { EventCardProps } from "../../types";
import { List } from "../atoms/EventCard/Card";
import { useFilters } from "../../hooks/FilterContext";
import styled from "styled-components";
import { Events } from "../../types";

// const StyledCard = styled.div`
//   box-shadow: 0px 3px 6px #00000029;
//   border-radius: 6px;
//   overflow: hidden;
//   transition: transform 0.3s ease;
//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

const ResultsListTitleContainer = styled.h3`
  /* display: block; */
  text-align: left;
  margin-right: 20px;
`;

const ShowMoreButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 12px;
  margin: 20px auto;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #b9dbff;
  }
`;

export const EventResultList: React.FC<EventCardProps> = () => {
  const { events } = useFilters() as { events: Events[] };
  const [visibleCount, setVisibelCount] = useState<number>(25);
  console.log("filtered events are returned", events);

  // this shows more item when the button is clicked
  const showMoreItems = () => {
    setVisibelCount((prevCount) => prevCount + 25);
  };

  // we only show 25 events at a time
  const visibleEvents = Array.isArray(events)
    ? events.slice(0, visibleCount)
    : [];

  console.log("visible events", events);

  return (
    <List>
      <ResultsListTitleContainer>
        Running Events found near you:
      </ResultsListTitleContainer>
      {events.length > 0 ? (
        visibleEvents.map((event) => (
          <EventCard
            key={event.id}
            aria-label={event.id}
            imageSrc={event.imageUrl}
            location={event.location}
            title={event.title}
            description={event.description}
            price={event.price}
            category={event.category}
            date={
              event.date
                ? new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : ""
            }
          />
        ))
      ) : (
        <p>No events found</p>
      )}
      {events.length > visibleCount && (
        <ShowMoreButton onClick={showMoreItems}>Show More</ShowMoreButton>
      )}
    </List>
  );
};
