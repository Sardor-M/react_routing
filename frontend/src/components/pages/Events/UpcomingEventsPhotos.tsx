import { useOutletContext } from "react-router-dom";

interface OutletContext {
  eventDetails: {
    imageUrl: string;
  };
}

export default function UpcomingEventDetailsPhotos() {
  const { eventDetails } = useOutletContext() as OutletContext;

  return (
    <img
      src={eventDetails.imageUrl}
      className="upcoming-event-details-img"
      alt={"Pic of" + eventDetails.imageUrl}
    />
  );
}
