// Organisms/EventCard.tsx
import React, { useState } from "react";
import { EventCard } from "../molecules/EventCard";
import { EventCardProps } from "../../types";
import { useFilters } from "../../context/FilterContext";
import styled from "styled-components";
import { Events } from "../../types";

const EventResultList = styled.div`
  display: flex;
  margin-top: 18px;
  align-items: start;
`;

const ResultsListTitleContainer = styled.div`
  display: block;
  text-align: left;
  margin-right: 20px;
`;

const ShowMoreButton = styled.button`
  text-align: center;
  border-radius: 12px;
  margin: 40px auto;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #d7ebff;
  border: 1px solid #f8f9fa;
  &:hover {
    background-color: #b9dbff;
  }
`;

export const EventSearchResult: React.FC<EventCardProps> = () => {
  const { events } = useFilters() as { events: Events[] };
  const [visibleCount, setVisibelCount] = useState<number>(7);
  console.log("filtered events are returned", events);

  // this shows more item when the button is clicked
  const showMoreItems = () => {
    setVisibelCount((prevCount) => prevCount + 10);
  };

  // we only show 25 events at a time
  const visibleEvents = Array.isArray(events)
    ? events.slice(0, visibleCount)
    : [];

  console.log("visible events", events);

  return (
    <>
      <ResultsListTitleContainer>
        Running Events found near you:
      </ResultsListTitleContainer>
      {events.length > 0 ? (
        visibleEvents.map((event) => (
          <EventResultList>
            <EventCard
              layout="horizontal"
              imageSrc={event.imageUrl}
              location={event.location}
              title={event.title}
              price={event.price}
              category={event.category}
              imageWidth="200px" // Custom image width for this usage
              imageHeight="200px" // Custom image height for this usage
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
          </EventResultList>
        ))
      ) : (
        <p>No events found</p>
      )}
      {events.length > visibleCount && (
        <ShowMoreButton onClick={showMoreItems}>Show More</ShowMoreButton>
      )}
    </>
  );
};
