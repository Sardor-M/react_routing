import React from "react";
import { useOutletContext } from "react-router-dom";

export default function UpcomingEventDetails() {
  const { eventDetails } = useOutletContext();

  return (
    <section>
      <h4>Name: {eventDetails.name}</h4>
      <h4>Decription: {eventDetails.description}</h4>
      <h4>Category: {eventDetails.type}</h4>
      <h4>Visibility: public</h4>
    </section>
  );
}
