import React, { useState } from "react";
import EventSearchTemplate from "../../templates/EventSearchTemplate";
import { EventSearchResult } from "../../organisms/EventSearchResult";
import EventResultMap from "../../organisms/EventResultMap";
import { useFilters } from "../../../context/FilterContext";

const EventSearchPage: React.FC = () => {
  const { events } = useFilters(); // Fetch events here
  const [hoveredEventId, setHoveredEventId] = useState<number | null>(null);

  return (
    // we are passing the map component as a prop to the EventSearchTemplate
    <EventSearchTemplate
      mapComponent={
        <EventResultMap events={events} hoveredEventId={hoveredEventId} />
      }
    >
      {/* <EventSearchResult /> */}
      <EventSearchResult
        events={events}
        hoveredEventId={hoveredEventId}
        setHoveredEventId={setHoveredEventId}
      />
    </EventSearchTemplate>
  );
};

export default EventSearchPage;
