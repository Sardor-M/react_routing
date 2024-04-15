import React, { useState } from "react";
import { Reviews } from "../../../types";
import { getEvents } from "../../../api/api";
import styled from "styled-components";

const ReviewsPageContainer = styled.div`
  padding: 10px;
  margin-bottom: 540px;
`;

export const loader = async () => {
  return getEvents();
};

export default function ReviewsPages() {
  const [reviews, setReviews] = useState<Reviews | null>(null);

  return (
    <ReviewsPageContainer>
      <h1>Reviews Page</h1>
    </ReviewsPageContainer>
  );
}
