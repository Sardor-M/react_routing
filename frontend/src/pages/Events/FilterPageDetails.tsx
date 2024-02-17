import React from "react";
import { useState } from "react";

interface EventCategory {
  id: number;
  type: string;
  date: number;
  location: string;
  distanceLength: number;
  description: string;
}

export default function FilterPageDetails() {
  const [category, setCategory] = useState<EventCategory[]>([]);

  // fetch running events based on the category
  const fetchRunnerEventsData = async (category: string) => {
    try {
      const fetchedData: EventCategory[] = await fetch(
        `http://localhost:4000/api/runners?type=${category}`
      )
        .then((response) => response.json())
        .then((data) => data);

      // Moved the filtering the data to server side.
      // const filteredData = filter
      //   ? fetchedData.filter((event) => event.type === filter)
      //   : fetchedData;

      setCategory(fetchedData);
    } catch (error) {
      if (error) {
        console.log("Error fetching the filtered events: " + error);
      }
    }
  };

  // Category details logic implementation function
  const handleFilterChange = (type: string) => {
    // TODO: Fetch category details
    setCategory([]);
    fetchRunnerEventsData(type);
  };

  return (
    <div className="filter-page-container">
      <h3 className="filter-page-left">FilterPageDetails</h3>
      <div
        className="filter-page-left input"
        onChange={(event) =>
          handleFilterChange((event.target as HTMLInputElement).value)
        }
      >
        <label>
          {" "}
          <input type="radio" value="simple" name="filter" /> short run{" "}
        </label>
        <label>
          {" "}
          <input type="radio" value="luxury" name="filter" /> long run{" "}
        </label>
        <label>
          {" "}
          <input type="radio" value="rugged" name="filter" /> marathon{" "}
        </label>
        <label>
          {" "}
          <input type="radio" value="simple" name="filter" /> short-distance
          race{" "}
        </label>
      </div>
      <div className="filtered-event-list">
        <h2 className="events-filtered"> Events </h2>
        <ul>
          {category.map((event) => (
            <div className="filtered-event-result-list" key={event.id}>
              {event.id}
              <h2 key={event.type}>{event.type}</h2>
              <li key={event.date}>{event.date}</li>
              <li key={event.description}>{event.description}</li>
              <li key={event.location}>{event.location}</li>
              <li key={event.distanceLength}>{event.distanceLength}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
