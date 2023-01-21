import { Routes, Route } from "react-router-dom";
import Map from "./Map.js";
import LandingPage from "../LandingPage.js";

function Main() {
  return (
    <Routes>
      <Route path="/">
        <LandingPage />
      </Route>
      <Route path="/map">
        <Map />
      </Route>
    </Routes>
  );
}

export default Main;
