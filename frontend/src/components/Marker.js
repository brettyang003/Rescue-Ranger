import { useState } from "react";
import { Marker } from "@react-google-maps/api";
function MarkerPopup(props) {
  return <Marker onClick={props.click} position={props.coordinates}></Marker>;
}

export default MarkerPopup;
