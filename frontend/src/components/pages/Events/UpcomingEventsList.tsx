import { Link } from "react-router-dom";
import { Events } from "../../../types";
import styled from "styled-components";
import Error from "../../atoms/Error/Error";
import useHttpNew from "../../../hooks/useHttp";

// export function loader() {
//   // await requireAuth();
//   return getEvents();
// }

const EventsListSection = styled.div`
  padding: 10px;
  margin-bottom: 540px;
`;

export default function UpcomingEventsList() {
  const {
    data: upcomingEvents,
    isLoading,
    error,
  } = useHttpNew("http://localhost:4000/api/events/upcoming");

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
          aria-label={`View details for ${event.name}`}
          className="upcoming-event-title"
        >
          <div className="upcoming-event-single" key={event.id}>
            <img src={event.imageUrl} alt={`Pic of ${event.name}`} />
            <div className="upcoming-event-info">
              <h3>{event.name}</h3>
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
