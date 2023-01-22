import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ControlledCarousel from "./components/carousel.js";
import AboutTheProject from "./components/About.js";
import Cards from "./components/Card.js"
import What from "./components/What.js"
import Stats from "./components/Stats.js"
import FadeInSection from "./components/Fade.js"
import Map from "./assets/map.jpg"
import Ammar from "./assets/ammr.jpg"
import Brett from "./assets/byang.jpg"
import Eduardo from "./assets/Z.jpg"
import Shivansh from "./assets/shivas.jpg"
import "./LandingPage.css";


function LandingPage() {
  return (
    <div
        className="container-fluid px-0"
      >
          <div className="row" id="project-title" style={ {height: "400px", backgroundColor: "#121212"} }>
            <div className="col-sm">
              <h2 class="text-center" style={ {fontSize: "80px", color: "white",
                backgroundSize: "100%", fontFamily: "Oswald", paddingTop: "9%"} }>
                  RESCUE RANGER
              </h2>
              <p class="text-center" style= { {fontSize:"26px", fontFamily: "Oswald", color: "white", fontStyle:"italic"} }>
              Bringing hope to the front lines, one rover at a time. 
              </p>
            </div>
          </div>  

          <div style = {{ height: "4px", backgroundColor: "white"}}></div>
          <div className="row" id="about-the-project" style={ {height: "700px", backgroundColor: "#121212"} }>
            <div className="col-sm">
              <AboutTheProject />
            </div>
            <div className="col-sm" style={{ textAlign:"center"}}>
              <img src={Map} alt="Maps" style={{paddingTop:"20vh", height: "600px"}}>
              </img>
            </div>
          </div>

          <FadeInSection>
          <div id="fade-in-section">
            <div className="row" id="stats" style={ {paddingTop: "5%" , height: "200px", backgroundColor: "#121212", textAlign: "center"} }>
              <h1 style={{fontSize: "55px", color: "white", weight: "bold", fontFamily: "Oswald"}}>
                How is Rescue Ranger relevant?</h1>
            </div>          
            <div className="row" id="carousel" style={ {height: "600px", backgroundColor: "#121212"} }>
              <div style={{marginLeft:"20%", textAlign: "center", width: "60vw", height: "80vh"}}>
                <ControlledCarousel />
              </div>
            </div> 
          </div>
          </FadeInSection>

          <div className="row" id="meet-the-team" style={ {height: "200px", backgroundColor: "#121212", textAlign: "center"} }>
            <div style = {{height: "4px", backgroundColor: "white"}}></div>
            <h1 style={{fontSize: "55px", color: "white", fontFamily: "Oswald"}}>
              Meet the team behind Rescue Ranger </h1>
          </div>

          <div className="row" style={ {paddingLeft:"3%" , textAlign: "center", height: "500px", backgroundColor: "#121212"} }>
            <div className="col-sm">
              <Cards name="Ammar Vora" desc="Second Year Computer Engineering" image={Ammar}/>
            </div>
            <div className="col-sm">
              <Cards name="Brett Yang" desc="Second Year Computer Engineering" image={Brett}/>
            </div>
            <div className="col-sm">
              <Cards name="Eduardo Martins" desc="Second Year Computer Engineering" image={Eduardo}/>
            </div>
            <div className="col-sm">
              <Cards name="Shivansh Singh" desc="Second Year Computer Engineering" image={Shivansh}/>
            </div>
          </div>
          <div style={{marginTop:"1%", backgroundColor: "white", height:"30px", width:"100vw", fontFamily:"Oswald", fontSize: "13px", textAlign: "center"}}> Copyright © 2023 Apple Inc. All rights reserved. </div>
      </div>
  );
}

export default LandingPage;
