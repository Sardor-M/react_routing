import React from "react";
import { useRouteError } from "react-router";

export default function Error() {
  const error = useRouteError();
  console.log(error, "Predefined error message is displayed");
  return (
    <div className="container-list">
      <h1>An error occurred!</h1>
    </div>
  );
}
