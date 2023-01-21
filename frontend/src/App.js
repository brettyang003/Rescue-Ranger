<<<<<<< HEAD
<<<<<<< Updated upstream
import { React, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import MarkerPopup from "./components/Marker.js";

=======
=======
import Main from "./components/Main";
>>>>>>> d81b1c70b5f089f87863fdf27b1afc54603a36db
import NavigationBar from "./components/NavigationBar.js";
import { Routes, Route } from "react-router-dom";
import Map from "./components/Map.js";
import LandingPage from "./LandingPage.js";
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> d81b1c70b5f089f87863fdf27b1afc54603a36db
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavigationBar />
              <LandingPage />
            </div>
          }
        ></Route>
        <Route
          path="/map"
          element={
            <div>
              <NavigationBar />
              <Map />
            </div>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <div>
              <NavigationBar />
              <h1>Contact</h1>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
