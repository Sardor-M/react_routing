import React, { useState } from "react";
import { Reviews } from "../../types";
import requireAuth from "../../utils/utils";
import {getEvents} from "../../api/api";


export const loader = async  () => {
    await requireAuth();
    return getEvents();
}

export default function ReviewsPages() {

  const [reviews, setReviews] = useState<Reviews | null>(null);

  return (
    <div className="container">
      <h1>Reviews Page</h1>
      
    </div>
  );
}
