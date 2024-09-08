import { Link } from "react-router-dom";
import { Events } from "../../../types";
import styled from "styled-components";
import Error from "../../atoms/Error/Error";
import useHttp from "../../../hooks/useHttp";
import { useEffect, useState } from "react";
import { useFilters } from "../../../context/FilterContext";

// export function loader() {
//   // await requireAuth();
//   return getEvents();
// }

// const EventsListSection = styled.div`
//   padding: 10px;
//   margin-bottom: 40px;
// `;

const EventsListSection = styled.div`
  padding: 20px;
  margin-bottom: 40px;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const EventItem = styled(Link)`
  text-decoration: none;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .upcoming-event-single {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .upcoming-event-info {
    padding: 10px;
    text-align: center;
  }

  h3 {
    font-size: 16px;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

const ShowMoreEvents = styled.button`
  background-color: #d7ebff;
  border: 1px solid #f8f9fa;
  border-radius: 12px;
  margin: 40px 40px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #b9dbff;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-size: 21px;
  margin-bottom: 20px;
  display: flex;
  font-weight: bold;
  justify-content: center;
  padding: 20px;
`;

export default function UpcomingEventsList() {
  // const { events } = useFilters() as { events: Events[] };
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const [{ data: upcomingEvents, isLoading, error }, fetchData] = useHttp(
    "http://localhost:8080/api/events/upcoming"
  );
  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 20);
  };

  useEffect(() => {
    fetchData(); // Call fetchData to initiate the request
  }, [fetchData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error title={"Failed to fetch the events"} message={error} />;
  }

  // const upcomingEvents = useLoaderData() as Events[];
  console.log("Log event from the upcoming", upcomingEvents);

  const upcomingEventsData =
    Array.isArray(upcomingEvents) && upcomingEvents.length > 0 ? (
      (upcomingEvents as Events[])
        ?.slice(0, visibleCount)
        .map((event: Events) => (
          <EventItem
            key={event.id}
            to={`/events/upcoming/${event.id}`}
            aria-label={`View details for ${event.title}`}
            className="upcoming-event-title"
          >
            <div className="upcoming-event-single" key={event.id}>
              <img src={event.imageUrl} alt={`Pic of ${event.title}`} />
              <div className="upcoming-event-info">
                <h3>{event.title}</h3>
                <p>${event.price}</p>
              </div>
            </div>
          </EventItem>
        ))
    ) : (
      <SectionTitle>No events found</SectionTitle>
    );

  return (
    <EventsListSection>
      <SectionTitle>Upcoming Event's List</SectionTitle>
      <div className="upcoming-event-list">
        <EventsGrid>{upcomingEventsData}</EventsGrid>
        {Array.isArray(upcomingEvents) &&
          upcomingEvents.length > visibleCount && (
            <ShowMoreEvents onClick={showMoreItems}>
              Show more events
            </ShowMoreEvents>
          )}
      </div>
    </EventsListSection>
  );
}
