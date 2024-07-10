import styled from "styled-components";
import { Filters, useFilters } from "../../hooks/useFilterContext";
import Collapsible from "../atoms/Collapsible";
import StarRating from "../atoms/StarRating";
import { useState } from "react";
import InputSearch from "../atoms/Input/InputSearch";
import { IoIosSearch } from "react-icons/io";

const SidebarContainer = styled.div`
  /* top: 0; */
  position: sticky;
  margin-top: 17px;
  bottom: 0;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 16px;
  border-right: 1px solid #eee;
`;

const FilterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
`;

const FilterItem = styled.li`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.label`
  margin-left: 8px;
`;

const FilterSidebar: React.FC = () => {
  const { filters, updateFilters } = useFilters();
  const [rating, setRating] = useState<number>(0);

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    updateFilters(filterType, value);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    updateFilters("reviewScore", `${newRating}`);
  };

  const categoryOptions = [
    "Trail Running",
    "Half-Marathon",
    "Marathon",
    "Swimming",
    "Short Run",
    "Cycling",
  ];

  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const eventTypeOptions = ["Virtual", "In-Person"];

  return (
    <SidebarContainer>
      <InputSearch placeholder="Search for events" icon={<IoIosSearch />} />
      {/* <FilterTitle>Distance</FilterTitle> */}
      <Collapsible title="Distance">
        <FilterList>
          {categoryOptions.map((category) => (
            <FilterItem key={category}>
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => handleFilterChange("category", category)}
              />
              <FilterLabel>{category}</FilterLabel>
            </FilterItem>
          ))}
        </FilterList>
      </Collapsible>
      <Collapsible title="Month">
        {/* <FilterTitle>Month</FilterTitle> */}
        <FilterList>
          {monthOptions.map((month) => (
            <FilterItem key={month}>
              <input
                type="checkbox"
                checked={filters.month.includes(month)}
                onChange={() => handleFilterChange("month", month)}
              />
              <FilterLabel>{month}</FilterLabel>
            </FilterItem>
          ))}
        </FilterList>
      </Collapsible>
      <Collapsible title="Event-Type">
        {/* <FilterTitle>Event-Type</FilterTitle> */}
        <FilterList>
          {eventTypeOptions.map((eventType) => (
            <FilterItem key={eventType}>
              <input
                type="checkbox"
                checked={filters.eventType.includes(eventType)}
                onChange={() => handleFilterChange("eventType", eventType)}
              />
              <FilterLabel>{eventType}</FilterLabel>
            </FilterItem>
          ))}
        </FilterList>
      </Collapsible>
      <Collapsible title="Reviews">
        <StarRating
          rating={rating}
          onRatingChange={handleRatingChange}
        ></StarRating>
      </Collapsible>
    </SidebarContainer>
  );
};

console.log("Printing out the : ", FilterSidebar);
export default FilterSidebar;
