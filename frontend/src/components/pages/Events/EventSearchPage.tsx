import React from "react";
import EventSearchTemplate from "../../templates/EventSearchTemplate";
import { EventSearchResult } from "../../organisms/EventSearchResult";

const EventSearchPage: React.FC = () => {
  return (
    <EventSearchTemplate>
      <EventSearchResult />
    </EventSearchTemplate>
  );
};

export default EventSearchPage;
