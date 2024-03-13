import React from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function Map() {
  // Load the Kakao Map API script
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_MAP_API_KEY}&autoload=false`;
    script.async = true;
    document.body.appendChild(script);

    // When the script is loaded...
    const onLoadKakaoMapAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 8,
        };
        new window.kakao.maps.Map(container, options);
      });
    };

    // Add the script to the DOM
    script.addEventListener("load", onLoadKakaoMapAPI);
  }, []);

  return (
    <>
      <MapContainer id="map">
        <h3>Are you interested into the events near you ?</h3>
        <div id="map" style={{ width: "100%", height: "400px" }}>
          {}
        </div>
      </MapContainer>
    </>
  );
}
