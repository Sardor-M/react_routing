import styled from "styled-components";

const LoadingStateContainer = styled.h2`
  margin-top: 20px;
  margin-left: 22px;
  font-weight: bold;
`;

export default function LoadingState() {
  return <LoadingStateContainer>Loading...</LoadingStateContainer>;
}
