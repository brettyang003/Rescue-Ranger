import { React, useState, useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import MarkerPopup from "./Marker.js";
import { db } from "../firestore.js";
import { collection, getDocs } from "firebase/firestore";
import RetrieveFile from "../api/RetrieveFile.js";

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
    lat: 50,
    lng: 30,
  };

  const test = {
    cid: "bafkreidal5jjq6fiw2ogv7hz4qzpqxdgm3qxenjllh3uza7pvoh6pynqcu",
    retrieval_url:
      "https://dweb.link/ipfs/bafkreidal5jjq6fiw2ogv7hz4qzpqxdgm3qxenjllh3uza7pvoh6pynqcu",
    estuary_retrieval_url:
      "https://api.estuary.tech/gw/ipfs/bafkreidal5jjq6fiw2ogv7hz4qzpqxdgm3qxenjllh3uza7pvoh6pynqcu",
    estuaryId: 91699858,
    providers: [
      "/ip4/136.144.49.1/tcp/6745/p2p/12D3KooWPVUFtVbAPpWmUNzDQMetG53zH8APCmfHLnyrxF4G9CPd",
      "/ip4/127.0.0.1/tcp/6745/p2p/12D3KooWPVUFtVbAPpWmUNzDQMetG53zH8APCmfHLnyrxF4G9CPd",
      "/ip4/136.144.49.1/udp/6746/quic/p2p/12D3KooWPVUFtVbAPpWmUNzDQMetG53zH8APCmfHLnyrxF4G9CPd",
      "/ip4/127.0.0.1/udp/6746/quic/p2p/12D3KooWPVUFtVbAPpWmUNzDQMetG53zH8APCmfHLnyrxF4G9CPd",
      "/ip4/136.144.49.1/tcp/6747/ws/p2p/12D3KooWPVUFtVbAPpWmUNzDQMetG53zH8APCmfHLnyrxF4G9CPd",
      "/ip4/127.0.0.1/tcp/6747/ws/p2p/12D3KooWPVUFtVbAPpWmUNzDQMetG53zH8APCmfHLnyrxF4G9CPd",
    ],
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

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "markers"));
    setMarkerData(markerData);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  useEffect(() => {
    getData();
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      mapTypeId="satellite"
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
                <RetrieveFile cid="bafkreidal5jjq6fiw2ogv7hz4qzpqxdgm3qxenjllh3uza7pvoh6pynqcu" />
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
