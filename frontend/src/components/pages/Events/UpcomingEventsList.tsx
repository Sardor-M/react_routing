import { Link } from "react-router-dom";
import { Events } from "../../../types";
import styled from "styled-components";
import Error from "../../atoms/Error/Error";
import useHttp from "../../../hooks/useHttp";
import { useEffect, useState } from "react";
import { EventCard } from "../../molecules/EventCard";
import SubTitle from "../../atoms/Subtitle";
import LoadingState from "../../atoms/LoadingState";

// Container for the entire list of events
const EventsListSection = styled.section`
  padding: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 20px auto;
  padding: 10px;
`;

// Grid to display the events in a grid format
const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-flow: dense;
  gap: 20px;
  margin-top: 50px;
  justify-items: stretch;
  align-items: start; // this will ensures the content start from the top
`;

// Each individual event item, wrapped around the EventCard molecule
const EventItem = styled(Link)`
  text-decoration: none;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  flex-direction: column; // this will ensure the card is veritcally aligned

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

// Button to show more events
const ShowMoreEvents = styled.button`
  text-align: center;
  background-color: #d7ebff;
  border: 1px solid #f8f9fa;
  border-radius: 12px;
  margin: 40px auto;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #b9dbff;
  }
`;

export default function UpcomingEventsList() {
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const [{ data: upcomingEvents, isLoading, error }, fetchData] = useHttp(
    "http://localhost:8080/api/events/upcoming"
  );

  // Function to load more events
  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 20);
  };

  useEffect(() => {
    fetchData(); // Call fetchData to initiate the request
  }, [fetchData]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <Error title={"Failed to fetch the events"} message={error} />;
  }

  // Ensure the upcomingEvents is an array and has events
  const upcomingEventsData =
    Array.isArray(upcomingEvents) && upcomingEvents.length > 0 ? (
      upcomingEvents.slice(0, visibleCount).map((event: Events) => (
        <EventItem
          key={event.id}
          to={`/events/upcoming/${event.id}`}
          aria-label={`View details for ${event.title}`}
        >
          {/* Wrap EventCard in EventItem */}
          <EventCard
            category={event.category}
            layout="vertical"
            location={event.location}
            title={event.title}
            price={event.price}
            imageSrc={event.imageUrl}
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
        </EventItem>
      ))
    ) : (
      <SubTitle>No events found</SubTitle>
    );

  return (
    <EventsListSection>
      <SubTitle>Upcoming Event's List</SubTitle>
      <EventsGrid>{upcomingEventsData}</EventsGrid>
      {Array.isArray(upcomingEvents) &&
        upcomingEvents.length > visibleCount && (
          <ShowMoreEvents onClick={showMoreItems}>
            Show more events
          </ShowMoreEvents>
        )}
    </EventsListSection>
  );
}
