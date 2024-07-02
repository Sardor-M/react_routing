import { createContext, useContext, useState } from "react";

interface Filters {
  distance: string[];
  month: string[];
  eventType: string[];
  reviewScore: string[];
}

interface FilterContextType {
  filters: Filters;
  updateFilters: (filterType: keyof Filters, value: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<Filters>({
    distance: [],
    month: [],
    eventType: [],
    reviewScore: [],
  });

  const updateFilters = (filterType: keyof Filters, value: string) => {
    setFilters((prevFilter) => {
      const updatedFilters = { ...prevFilter };

      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[filterType].push(value);
      }

      return updatedFilters;
    });
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilters }}>
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
