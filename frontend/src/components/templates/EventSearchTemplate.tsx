import React from "react";
import styled from "styled-components";
import FilterSearchBar from "../organisms/FilterSearchBar";
import SearchBar from "../molecules/SearchBar";
import { EventCardProps } from "../../types";

const TemplateContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 16px;
`;

const MapContainer = styled.div`
  flex: 1;
  /* Add map styling here */
`;

interface EventSearchTemplateProps {
  children: React.ReactNode;
}
const EventSearchTemplate: React.FC<EventSearchTemplateProps> = ({
  children,
}) => {
  return (
    <div>
      <TemplateContainer>
        <FilterSearchBar />
        <ContentContainer>
          <SearchBar />
          {children}
        </ContentContainer>
        <MapContainer>{/* Map goes here */}</MapContainer>
      </TemplateContainer>
    </div>
  );
};

export default EventSearchTemplate;
