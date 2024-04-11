import { useRouteError } from "react-router";

export default function ErrorRouter() {
  const error = useRouteError() as {
    message: string;
    status: number;
    statusText: string;
  };
  console.log(error, "Predefined error message is displayed");

  return (
    <>
      <h1>Error message:</h1>
      <h2>{error.message}</h2>
      <p>
        {error.status} - {error.statusText}
      </p>
    </>
  );
}
