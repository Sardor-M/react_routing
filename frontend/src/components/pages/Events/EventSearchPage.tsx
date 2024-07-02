import React from "react";
import EventSearchTemplate from "../../templates/EventSearchTemplate";
import { EventList } from "../../organisms/EventList";

const EventSearchPage: React.FC = () => {
  return (
    <EventSearchTemplate>
      <EventList />
    </EventSearchTemplate>
  );
};

export default EventSearchPage;
