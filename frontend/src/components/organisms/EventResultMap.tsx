import React, { useEffect, useMemo, useState } from "react";
import { Events } from "../../types";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup } from "react-map-gl";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

interface MapProps {
  events: Events[];
}

interface ViewState {
  latitude: number;
  longitude: number;
  zoom: number;
}

const EventResultMap: React.FC<MapProps> = ({ events }) => {
  const eventsWithCoordinates = useMemo(() => {
    return events.filter(
      (event) =>
        typeof event.latitude === "number" &&
        typeof event.longitude === "number"
    );
  }, [events]);
  console.log("Events with Coordinates:", eventsWithCoordinates);

  //   const [viewstate, setViewState] = useState<ViewState>({
  //     latitude: eventsWithCoordinates[0]?.latitude || 37.7577,
  //     longitude: eventsWithCoordinates[0]?.longitude || -122.4376,
  //     zoom: 8,
  //   });
  const [viewState, setViewState] = useState<ViewState>(() => ({
    latitude: eventsWithCoordinates[0]?.latitude || 37.7577,
    longitude: eventsWithCoordinates[0]?.longitude || -122.4376,
    zoom: 8,
  }));

  const [selectedEvent, setSelectedEvent] = useState<Events | null>(null);

  useEffect(() => {
    console.log("Events with Coordinates:", eventsWithCoordinates);
    console.log("Mapbox Access Token:", process.env.REACT_APP_MAPBOX_TOKEN);

    // we will center the map to the first event fertched
    if (eventsWithCoordinates.length > 0) {
      const firstEvent = eventsWithCoordinates[0];
      setViewState((prev) => {
        if (
          prev.latitude !== firstEvent.latitude ||
          prev.longitude !== firstEvent.longitude
        ) {
          return {
            ...prev,
            latitude: firstEvent.latitude!,
            longitude: firstEvent.longitude!,
          };
        }
        return prev; // No change needed
      });
    }
  }, [eventsWithCoordinates]);

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
      style={{ width: "100%", height: "100%" }} // ensuring that the map takes up the full width and height of the parent container
    >
      {eventsWithCoordinates.map((event) => {
        return (
          <Marker
            key={event.id}
            latitude={event.latitude}
            longitude={event.longitude}
          >
            <div onClick={() => setSelectedEvent(event)}>
              <img
                src={event.imageUrl}
                alt={event.title}
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </Marker>
        );
      })}
      {selectedEvent && selectedEvent.latitude && selectedEvent.longitude && (
        <Popup
          latitude={selectedEvent.latitude}
          longitude={selectedEvent.longitude}
          closeButton={false}
          closeOnClick={false}
          offset={[0, -10] as [number, number]}
          anchor="top"
        >
          <div>
            <h2>{selectedEvent.name}</h2>
            <p>{selectedEvent.location}</p>
            <p>{selectedEvent.description}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default EventResultMap;
