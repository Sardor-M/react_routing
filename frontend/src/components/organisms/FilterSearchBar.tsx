import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 16px;
  border-right: 1px solid #eee;
`;

const FilterTitle = styled.h3`
  margin-bottom: 16px;
`;

const FilterItem = styled.div`
  margin-bottom: 8px;
`;

const FilterSidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <FilterTitle>Applied Filters</FilterTitle>
      <FilterItem>
        Running <button>Clear all</button>
      </FilterItem>
      <FilterTitle>Sport</FilterTitle>
      {/* Add filter options here */}
      <FilterTitle>Distance</FilterTitle>
      {/* Add filter options here */}
      <FilterTitle>Month</FilterTitle>
      {/* Add filter options here */}ß<FilterTitle>Event Type</FilterTitle>
      {/* Add filter options here */}
      <FilterTitle>Reviews</FilterTitle>
      {/* Add filter options here */}
      <FilterTitle>Past Events</FilterTitle>
      {/* Add filter options here */}
    </SidebarContainer>
  );
};

export default FilterSidebar;
