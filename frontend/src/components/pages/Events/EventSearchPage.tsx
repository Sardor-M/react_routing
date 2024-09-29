import React from "react";
import EventSearchTemplate from "../../templates/EventSearchTemplate";
import { EventSearchResult } from "../../organisms/EventSearchResult";
import EventResultMap from "../../organisms/EventResultMap";
import { useFilters } from "../../../context/FilterContext";

const EventSearchPage: React.FC = () => {
  const { events } = useFilters(); // Fetch events here

  return (
    <EventSearchTemplate mapComponent={<EventResultMap events={events} />}>
      {/* <EventSearchResult /> */}
      <EventSearchResult events={events} />
    </EventSearchTemplate>
  );
};

export default EventSearchPage;
