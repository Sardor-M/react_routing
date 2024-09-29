import React from "react";
import styled from "styled-components";
import FilterSidebar from "../organisms/FilterSidebar";


const SearchFilterContainer = styled.div`
  overflow: hidden;
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  /* width: 250px; */
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  background-color: #f5f5f5;
  /* z-index: 1; */
`;

const MainContent = styled.div`
  flex: 0.7;
  overflow-y: auto;
  margin: 15px 10px;
  height: auto;
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  margin: 0 10px;
`;

const MapContainer = styled.div`
  position: sticky;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: #eaeaea;
  z-index: 1;
  flex: 0.6;
`;

interface EventSearchTemplateProps {
  children: React.ReactNode;
  mapComponent: React.ReactNode;
}
const EventSearchTemplate: React.FC<EventSearchTemplateProps> = ({
  children,
  mapComponent,
}) => {
  return (
    <SearchFilterContainer>
      <SidebarContainer>
        <FilterSidebar />
      </SidebarContainer>
      <MainContent>
        <ContentContainer> {children}</ContentContainer>
      </MainContent>
      <MapContainer>
        {/* // event result map organism should be rendered here */}
        {/* <EventResultMap /> */}
        {mapComponent}
      </MapContainer>
    </SearchFilterContainer>
  );
};

export default EventSearchTemplate;
