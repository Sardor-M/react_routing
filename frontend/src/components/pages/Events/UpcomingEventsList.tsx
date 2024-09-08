import { Link } from "react-router-dom";
import { Events } from "../../../types";
import styled from "styled-components";
import Error from "../../atoms/Error/Error";
import useHttp from "../../../hooks/useHttp";

// export function loader() {
//   // await requireAuth();
//   return getEvents();
// }

const EventsListSection = styled.div`
  padding: 10px;
  margin-bottom: 540px;
`;

export default function UpcomingEventsList() {
  const [{ data: upcomingEvents, isLoading, error }] = useHttp(
    "http://localhost:8080/api/events/upcoming"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error title={"Failed to fetch the events"} message={error} />;
  }

  // const upcomingEvents = useLoaderData() as Events[];
  console.log("Log event from the upcoming", upcomingEvents);

  const upcomingEventsData = (upcomingEvents as Events[])?.map(
    (event: Events) => {
      //   console.log("Event: ", event);
      return (
        <Link
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
          </div>{" "}
        </Link>
      );
    }
  );

  return (
    <EventsListSection>
      <h1 className="upcoming-event-title"> Upcoming Event's List</h1>
      <div className="upcoming-event-list">
        <section>{upcomingEventsData}</section>
      </div>
    </EventsListSection>
  );
}
