import { React, useState, useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import MarkerPopup from "./Marker.js";

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDUjer0xzwRLAfa6hJs7oOyKSLd9YovfCE",
  });
  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lat: 50,
    lng: 30,
  };

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  });

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  });

  //useState Handlers
  const [markers, setMarkers] = useState([]);

  const onClickHandler = (event) => {
    setMarkers([...markers, { coordinates: event.latLng, isVisible: false }]);
  };

  const markerClickHandler = (i) => {
    const tempMarkers = [...markers];
    tempMarkers[i].isVisible = !tempMarkers[i].isVisible;
    setMarkers(tempMarkers);
  };

  useEffect(() => {});
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={onClickHandler}
    >
      {markers.map((marker, i) => {
        return (
          <div>
            {marker.isVisible ? (
              <InfoWindow position={marker.coordinates}>
                <h1>Info</h1>
              </InfoWindow>
            ) : (
              <></>
            )}
            <MarkerPopup
              click={() => markerClickHandler(i)}
              coordinates={marker.coordinates}
            />
          </div>
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
