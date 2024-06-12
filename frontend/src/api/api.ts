async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error from data server is thrown by Runner's side");
    }
    return response.json();
  } catch (err) {
    console.error("Fetch Error: ", err);
    throw err;
  }
}

export async function getEvents() {
  return fetchData("http://localhost:8080/api/runners");
}

export async function getUpcomingEventDetail(id: string) {
  return fetchData(`http://localhost:8080/api/events/upcoming/${id}`);
}
