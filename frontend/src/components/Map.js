import { React, useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import { db } from "../firestore.js";
import { collection, query, onSnapshot } from "firebase/firestore";
import RetrieveFile from "../api/RetrieveFile.js";
import MarkerPopup from "./Marker.js";

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDUjer0xzwRLAfa6hJs7oOyKSLd9YovfCE",
  });
  const containerStyle = {
    width: "100vw",
    height: "92.01vh",
  };

  const center = {
    lat: 43,
    lng: -79,
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
  const [markerData, setMarkerData] = useState();

  const onClickHandler = (event) => {
    setMarkers([...markers, { coordinates: event.latLng, isVisible: false }]);
  };

  const markerClickHandler = (i) => {
    const tempMarkers = [...markers];
    tempMarkers[i].isVisible = !tempMarkers[i].isVisible;
    setMarkers(tempMarkers);
  };

  //   const getData = async () => {
  //     const querySnapshot = await getDocs(collection(db, "marker"));
  //     setMarkerData(markerData);
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data().cid}`);
  //     });
  //   };

  const getData = async () => {
    const q = query(collection(db, "marker"));
    onSnapshot(q, (querySnapshot) => {
      let markerList = [];
      let markerCoords = [];
      querySnapshot.forEach((doc) => {
        markerList.push(doc.data());
        let newCoords = new window.google.maps.LatLng(
          doc.data().lat,
          doc.data().lon
        );
        markerCoords.push({ coordinates: newCoords, isVisible: false });
      });
      setMarkers(markerCoords);
      setMarkerData(markerList);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      mapTypeId="satellite"
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={onClickHandler}
    >
      {markers.map((marker, i) => {
        return (
          <div>
            {marker.isVisible ? (
              <InfoWindow position={marker.coordinates}>
                <RetrieveFile cid={markerData[i].cid} />
              </InfoWindow>
            ) : (
              <></>
            )}
            <Marker
              onClick={() => markerClickHandler(i)}
              position={marker.coordinates}
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
