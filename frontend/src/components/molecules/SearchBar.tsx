import React from "react";
import styled from "styled-components";
import InputSearch from "../atoms/Input/InputSearch";
import ButtonSearch from "../atoms/Button/ButtonSearch";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SearchBar: React.FC = () => {
  return (
    <SearchBarContainer>
      <InputSearch placeholder="Search for events" />
      <ButtonSearch whileHover={{ scale: 1.05 }}>Search</ButtonSearch>
    </SearchBarContainer>
  );
};

export default SearchBar;
