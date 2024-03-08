import FilterPageDetails from "./FilterPageDetails";

export default function EventsPage() {
  return (
    <div className="container">
      <h1>Events Goes Here</h1>
      <FilterPageDetails />
        // I should add the filtered events here after the filter component has finished it rendering.
    </div>
  );
}

