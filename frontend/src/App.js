import Main from "./components/Main";
import NavigationBar from "./components/NavigationBar.js";
import { Routes, Route } from "react-router-dom";
import Map from "./components/Map.js";
import LandingPage from "./LandingPage.js";
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
