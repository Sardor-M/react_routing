import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function ResultMap() {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";

  if (!API_KEY) {
    console.error("Google API key is missing");
    return <div>Error: Google API key is missing</div>;
  }

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{ width: "100%", objectFit: "cover" }}
        defaultCenter={{ lat: 37.774929, lng: -122.419416 }}
        defaultZoom={11}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
}
