import { GetEvent } from "../types";

export async function getEvents(id: string): Promise<GetEvent> {
  const url = id
    ? `http://localhost:4000/api/runners/${id}`
    : "http://localhost:4000/api/runners";
  const response = await fetch(url);

  if (!response.ok) {
    throw {
      message: "Error from data server is thrown by Runner's side",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  console.log(data, "Data from GetEvents function");
  return data.runners;
}

export async function getEventDetails(id: string): Promise<GetEvent> {
  const url = id
    ? `http://localhost:4000/api/events/upcoming${id}`
    : "http://localhost:4000/api/events/upcoming";
  const response = await fetch(url);

  if (!response.ok) {
    throw {
      message: "Error fetching data from the server !",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.runners;
  // const response = await fetch ("/events/upcoming/${id}")
}
