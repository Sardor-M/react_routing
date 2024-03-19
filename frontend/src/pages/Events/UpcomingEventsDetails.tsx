import { useOutletContext } from "react-router-dom";

interface OutletContext {
  eventDetails: {
    name: string;
    description: string;
    type: string;
  };
}

export default function UpcomingEventDetails() {
  const { eventDetails } = useOutletContext() as OutletContext;

  return (
    <section className="upcoming-event-details-info">
      <h4>
        Name: <span> {eventDetails.name} </span>
      </h4>
      <h4>
        Decription: <span> {eventDetails.description}</span>
      </h4>
      <h4>
        Category: <span>{eventDetails.type}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
}
