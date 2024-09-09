import styled from "styled-components";
import TextForSubPages from "../../atoms/Subtitle";

const EventPageContainer = styled.div`
  padding: 10px;
  margin-bottom: 340px;
`;
export default function EventsPage() {
  return (
    <EventPageContainer>
      <TextForSubPages textAlign="left">
        All the Upcoming Events in South Korea{" "}
      </TextForSubPages>
    </EventPageContainer>
  );
}
