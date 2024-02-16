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
    <div className='filter-page-container'>
      <h3 className='filter-page-left'>FilterPageDetails</h3>
        <div className='filter-page-left input' onChange={event => handleFilterChange((event.target as HTMLInputElement).value)}> 
          <input type="radio" value="short-run" name="filter"> short run
          <label htmlFor="option1">short run</label> </input> <br></br>  
          <input type="radio" value="long-run" name="filter"> long run
          <label htmlFor="option1"> long run </label> </input> <br></br> 
          <input type="radio" value="marathon" name="filter"> marathon
          <label htmlFor="option1">marathon</label> </input> <br></br> 
          <input type="radio" value="short-distance-race" name="filter"/> short-distance run
        </div>
        <div className="filtered-event-list">
            <h2 className='events-filtered'> Events </h2>
            <ul>
              {category.map((event) => (
                <div className='filtered-event-result-list' key={event.id}>{event.id}
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
