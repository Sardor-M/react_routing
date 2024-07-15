import { createContext, useContext, useEffect, useState } from "react";
import { Events } from "../types";

export interface Filters {
  category: string[];
  month: string[];
  eventType: string[];
  reviewScore: string[];
}
export interface Event {
  id: string;
  title: string;
  location: string;
  latitude: number;
  longitude: number;
  date?: string;
}

interface FilterContextType {
  filters: Filters;
  updateFilters: (filterType: keyof Filters, value: string) => void;
  events: Events[];
  visible?: number;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<Filters>({
    category: [],
    month: [],
    eventType: [],
    reviewScore: [],
  });

  const [events, setEvents] = useState<Events[]>([]);

  const fetchEvents = async (filters: Filters) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/runners/filtered",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters),
        }
      );
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setEvents(data);
      } else {
        console.log("No events found", data);
      }
      // setEvents(data);
      console.log("Data returned from the server: ", data);
    } catch (error) {
      console.error("there was an error fetching the data: ", error);
    }
  };

  useEffect(() => {
    fetchEvents(filters);
  }, [filters]);

  const updateFilters = (filterType: keyof Filters, value: string) => {
    setFilters((prevFilter) => {
      const updatedFilters = { ...prevFilter };

      // here we clear the previeous value and set the new value for the single-selection filters
      // tooggle selection: this will unslect the input selection box if the value is already present
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], value];
      }

      return updatedFilters;
    });
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilters, events }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within the  filterProvider");
  }
  return context;
};

// if (updatedFilters[filterType].includes(value)) {
//   updatedFilters[filterType] = updatedFilters[filterType].filter(
//     (item) => item !== value
//   );
// } else {
//   updatedFilters[filterType].push(value);
// }
