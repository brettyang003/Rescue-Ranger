import { Routes, Route } from "react-router-dom";
import Map from "./Map.js";
import LandingPage from "../LandingPage.js";

function Main() {
  return (
    <Routes>
      <Route path="/" element={LandingPage}></Route>
      <Route path="/map" element={Map}></Route>
    </Routes>
  );
}

export default Main;
