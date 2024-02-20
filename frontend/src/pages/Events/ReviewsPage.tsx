import React, { useState } from "react";
import {Reviews} from "../../types/index";


export default function ReviewsPages() {

  const [reviews, setReviews] = useState<Reviews | null>(null);

  return (
    <div className="container">
      <h1>Reviews Page</h1>
    </div>
  );
}
