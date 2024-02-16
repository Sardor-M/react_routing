import React from 'react'
import { useState } from 'react';

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
    const fetchRuns = async (filter:string) => {
      try {
        const fecthedData : EventCategory[] = 
          await fetch(`http://localhost:4000/api/events/${filter}`)
          .then(response => response.json())
          .then(data => data);
        setCategory(fecthedData);
      }
      catch (error) {
        if (error) {
          console.log("Error fetching the filtered events: " + error);
        }
      }
    }

    // Category details logic implementation function
    const handleFilterChange = (filter: string) => {
        // TODO: Fetch category details
        fetchRuns(filter);
    }

  return (
    <div className='container'>
     <h1 className='filter-page-left'>FilterPageDetails</h1>
      <button onClick ={() => handleFilterChange("short-run")} className="btn btn-primary"> Short-Runs</button>
      <button onClick={() => handleFilterChange("long-run")} className='btn btn-primary'>Long-runs</button>
      <button onClick={() => handleFilterChange("marathons")} className="btn btn-primary"> Marathons</button>
      <button onClick={() => handleFilterChange("short-distance-races")} className="btn btn-primary">Short Distance Races</button>

      <div className="filtered-event-list">
          <h1 className='events-filtered'> Events </h1>
          <ul>
            {category.map((event) => (
              <div className='running-event-id' key={event.id}>{event.id}
                <h2 key={event.type}>{event.type}</h2>
                <li key={event.date}>{event.date.toString()}</li>
                <li key={event.description}>{event.description}</li>
                <li key={event.location}>{event.location}</li>
                <li key={event.distanceLength}>{event.distanceLength}</li>
              </div>
            ))}
          </ul>
        </div> 
    </div>
    
  )
};
