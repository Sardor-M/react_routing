import React, { useEffect, useMemo, useState } from "react";
import { Events } from "../../types";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import styled from "styled-components";
import { SlLocationPin } from "react-icons/sl";
import { IoLogoUsd } from "react-icons/io5";

const PopupContent = styled.div`
  display: flex;
  flex-direction: flex-start;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const PopupContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 14px;
  width: 300px;
`;

const EventImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  flex-shrink: 0;
`;

// Molecule: Event Title
const EventTitle = styled.h2`
  font-size: 14px;
  margin: 0;
  font-weight: bold;
  display: flex;
  justify-content: left;
`;

const EventPrice = styled.p`
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  --tw-text-opacity: 1;
  color: rgb((255, 255, 255) / var(--tw-text-opacity));
  margin: 4px 0;
  color: #555;
  display: flex;
  justify-content: left;
`;

const EventDate = styled.p`
  font-size: 12px;
  color: #888;
  display: flex;
  justify-content: left;
`;

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

interface MapProps {
  events: Events[];
  hoveredEventId: number | null;
}

interface ViewState {
  latitude: number;
  longitude: number;
  zoom: number;
}

const EventResultMap: React.FC<MapProps> = ({ events, hoveredEventId }) => {
  const eventsWithCoordinates = useMemo(() => {
    return events.filter(
      (event) =>
        typeof event.latitude === "number" &&
        typeof event.longitude === "number"
    );
  }, [events]);
  console.log("Events with Coordinates:", eventsWithCoordinates);

  // Get the first 5 events
  const firstFiveEvents = useMemo(() => {
    return eventsWithCoordinates.slice(0, 5);
  }, [eventsWithCoordinates]);

  const [viewState, setViewState] = useState<ViewState>(() => ({
    latitude: firstFiveEvents[0]?.latitude || 37.7577,
    longitude: firstFiveEvents[0]?.longitude || -122.4376,
    zoom: 8,
  }));

  //   const [selectedEvent, setSelectedEvent] = useState<Events | null>(null);
  const [hoveredMarkerId, setHoveredMarkerId] = useState<number | null>(null);

  // function to handle the hover event
  const handleMarkerHover = (eventId: number) => {
    setHoveredMarkerId(eventId);
  };

  // method to calculate the center of the mao based on the first 5 events
  function calculateCenter(events: Events[]) {
    const lat = events.map((event) => event.latitude!);
    const long = events.map((event) => event.longitude!);

    // method to caclculate the avg latitude
    const totalLatSum = lat.reduce((acc, curr) => acc + curr, 0);
    const avgLat = totalLatSum / lat.length;

    // method to calculate the avg longitude
    const totalLongSum = long.reduce((acc, curr) => acc + curr, 0);
    const avgLong = totalLongSum / long.length;

    return { latitude: avgLat, longitude: avgLong };
  }

  function estimateZoomLevel(events: Events[]) {
    // Etap 1: extract the long and langs
    const lat = events.map((event) => event.latitude!);
    const long = events.map((event) => event.longitude!);

    // Etap 2: calculate the max and min lat and long
    const maxLat = Math.max(...lat);
    const minLat = Math.min(...lat);
    const maxLong = Math.max(...long);
    const minLong = Math.min(...long);

    // Etap 3 calculate the distance between the max and min lat and long
    const langDistance = maxLong - minLong;
    const latDistance = maxLat - minLat;

    // Etap 4: we calculate the zoom level based on the distance between the max and min lat and long
    const zoom =
      Math.min(
        Math.floor(Math.log2(360 / langDistance)),
        Math.floor(Math.log2(180 / latDistance))

        // we're adding a 1 to the zoom level to make the map a bit more zoomed in
      ) + 1;

    return zoom;
  }

  useEffect(() => {
    console.log(
      "Events with Coordinates inside useEffect:",
      eventsWithCoordinates
    );

    const center = calculateCenter(firstFiveEvents);
    const zomm = estimateZoomLevel(firstFiveEvents);

    // we will center the map to the first top 5 events fetched
    if (firstFiveEvents.length > 0) {
      // first 5 events will be centered on the map by default
      console.log("firstFiveEvents:", firstFiveEvents);
      setViewState((prev) => ({
        ...prev,
        latitude: center.latitude!,
        longitude: center.longitude!,
        zoom: zomm,
      }));
    }
  }, [eventsWithCoordinates, firstFiveEvents]);

  //   const hoveredEvent = eventsWithCoordinates.find(
  //     (e) => e.id === hoveredMarkerId
  //   );

  return (
    <MapContainer>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/sardor0968/cm1n7c9l7001901rb0z6rexnm" // changed the map style to more basic one
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: "100%", height: "100%" }} // ensuring that the map takes up the full width and height of the parent container
      >
        {eventsWithCoordinates.map((event) => {
          const isHovered = hoveredEventId === event.id;
          const markerColor = isHovered ? "blue" : "red";

          return (
            <Marker
              key={event.id}
              latitude={event.latitude}
              longitude={event.longitude}
            >
              <div
                style={{ cursor: "pointer" }}
                onMouseEnter={() => handleMarkerHover(event.id)}
                onMouseLeave={() => setHoveredMarkerId(null)}
              >
                <SlLocationPin size="40" color={markerColor} />
                {hoveredMarkerId === event.id && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "45px",
                      left: "-100px",
                    }}
                  >
                    <PopupContainer>
                      <PopupContent>
                        <EventImage src={event.imageUrl} alt="Event" />
                        <TextContainer>
                          <EventTitle>{event.title}</EventTitle>
                          <EventDate>
                            {new Date(event.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </EventDate>
                          <EventPrice>
                            {(event.price ?? 0) > 80 ? (
                              "Free"
                            ) : (
                              <>
                                <IoLogoUsd
                                  style={{
                                    marginRight: "1px",
                                    fill: "rgb(16, 16, 16)",
                                  }}
                                />
                                {event.price}
                              </>
                            )}
                          </EventPrice>
                        </TextContainer>
                      </PopupContent>
                    </PopupContainer>
                  </div>
                )}
              </div>
            </Marker>
          );
        })}
      </Map>
    </MapContainer>
  );
};

export default EventResultMap;
