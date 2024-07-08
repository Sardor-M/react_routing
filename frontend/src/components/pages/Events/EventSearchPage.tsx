import React from "react";
import EventSearchTemplate from "../../templates/EventSearchTemplate";
import { EventResultList } from "../../organisms/EventList";

const EventSearchPage: React.FC = () => {
  return (
    <EventSearchTemplate>
      <EventResultList />
    </EventSearchTemplate>
  );
};

export default EventSearchPage;
