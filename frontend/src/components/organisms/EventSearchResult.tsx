// Organisms/EventCard.tsx
import React, { useState } from "react";
import { EventCard } from "../molecules/EventCard";
import styled from "styled-components";
import { Events } from "../../types";

const HeaderElementContainer = styled.h3`
  display: flex;
  margin-top: 2px;
  margin-bottom: 22px;
  text-align: left;
  align-items: center;
  font-size: 19px;
`;

const EventResultList = styled.div`
  display: flex;
  margin-top: 18px;
  align-items: start;
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

interface EventSearchResultProps {
  events: Events[];
  hoveredEventId: number | null;
  setHoveredEventId: (id: number | null) => void;
}

export const EventSearchResult: React.FC<EventSearchResultProps> = ({
  events,
  setHoveredEventId,
}) => {
  // const { events } = useFilters() as { events: Events[] };
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
      <HeaderElementContainer>
        Running Events found near you:
      </HeaderElementContainer>
      {events.length > 0 ? (
        visibleEvents.map((event) => (
          <EventResultList>
            <EventCard
              key={event.id}
              layout="horizontal"
              imageSrc={event.imageUrl}
              location={event.location}
              title={event.title}
              price={event.price}
              category={event.category}
              onMouseEnter={() => setHoveredEventId(event.id)}
              onMouseLeave={() => setHoveredEventId(null)}
              style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
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
