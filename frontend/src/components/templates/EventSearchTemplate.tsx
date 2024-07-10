import React from "react";
import styled from "styled-components";
import FilterSidebar from "../organisms/FilterSidebar";
import ResultMap from "../molecules/ResultMap";

const SearchFilterContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 0.6;
  padding: 16px;
  margin: 0 10px;
`;

const MapContainer = styled.div`
  flex: 0.6;
  // map styles will go here later
`;

interface EventSearchTemplateProps {
  children: React.ReactNode;
}
const EventSearchTemplate: React.FC<EventSearchTemplateProps> = ({
  children,
}) => {
  return (
    // <div style={{ marginTop: "20px" }}>
    <SearchFilterContainer>
      <FilterSidebar />
      <ContentContainer> {children}</ContentContainer>
      <MapContainer>
        <ResultMap />
      </MapContainer>
    </SearchFilterContainer>
    // </div>
  );
};

export default EventSearchTemplate;
