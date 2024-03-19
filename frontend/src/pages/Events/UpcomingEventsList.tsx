import { Link, useLoaderData } from "react-router-dom";
import { Events } from "../../types";

// export async function loader() {
//   await requireAuth();
//   return getUpcomingEventsList();
// }

export default function UpcomingEventsList() {
  const upcomingEvents = useLoaderData() as Events[];

  const upcomingEventsData = upcomingEvents?.map((event) => {
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
  });

  return (
    <section>
      <h1 className="upcoming-event-title"> Upcomning Event's List</h1>
      <div className="upcoming-event-list">
        <section>{upcomingEventsData}</section>
      </div>
    </section>
  );
}
