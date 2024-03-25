import FilterPageDetails from "./FilterPageDetails";
import styled from "styled-components";


const EventPageContainer = styled.div`
  padding: 10px;
  margin-bottom: 340px;

`
export default function EventsPage() {
  return (
    <EventPageContainer>
      <h1>Events Goes Here</h1>
      <FilterPageDetails />
    </EventPageContainer>
  );
}

