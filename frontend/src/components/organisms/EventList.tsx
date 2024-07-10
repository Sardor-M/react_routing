// Organisms/EventCard.tsx
import React from "react";
import { EventCard } from "../molecules/EventCard";
import { EventCardProps, Events } from "../../types";
import { List } from "../atoms/EventCard/Card";
import { useFilters } from "../../hooks/useFilterContext";
import styled from "styled-components";

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

export const EventResultList: React.FC<EventCardProps> = () => {
  const { events } = useFilters() as { events: Events[] };
  console.log("filtered events are returned", events);

  return (
    <List>
      <ResultsListTitleContainer>
        Running Events found:
      </ResultsListTitleContainer>
      {events.length > 0 ? (
        events.map((event) => (
          <EventCard
            key={event.id}
            aria-label={event.id}
            imageSrc={event.imageUrl}
            location={event.location}
            title={event.title}
            description={event.description}
            price={event.price}
            category={event.category}
            date={new Date(event.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          />
        ))
      ) : (
        <p>No events found</p>
      )}
    </List>
  );

  // const {
  //   data: eventList,
  //   isLoading,
  //   error,
  // } = useHttpNew("http://localhost:8080/api/runners");

  // if (isLoading) {
  //   return <div> Loading ...</div>;
  // }

  // if (error) {
  //   return <div> Error: {error}</div>;
  // }

  // const eventListData = (eventList as Events[])?.map((event: Events) => {
  //   return (
  //     <div>
  //       <List>
  //         <EventCard
  //           key={event.id}
  //           aria-label={event.id}
  //           imageSrc={event.imageUrl}
  //           title={event.title}
  //           description={event.description}
  //           price={event.price}
  //         />
  //       </List>
  //     </div>
  //   );
  // });

  // return <StyledCard>{eventListData}</StyledCard>;
};
