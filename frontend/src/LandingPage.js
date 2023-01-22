import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ControlledCarousel from "./components/carousel.js";
import AboutTheProject from "./components/About.js";
import Cards from "./components/Card.js"
import What from "./components/What.js"
import Stats from "./components/Stats.js"
import ClickMee from "./components/Button.js"
import FadeInSection from "./components/Fade.js"
import Map from "./assets/map.jpg"
import buildings from './assets/buildings.webp';
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
        <div id="first-page" style={{backgroundColor: "#1f1e1e", width:"430px"}}>
          <div className="row" id="project-title" style={ {height: "76vh"} }>
            <div className="col-sm">
              <h2 class="text-center" style={ {fontSize: "50px", color: "white",
                backgroundSize: "100%", fontFamily: "Oswald", paddingTop: "70%"} }>
                  RESCUE RANGER
              </h2>
              <p class="text-center" style= { {paddingLeft:"7%", paddingRight:"7%", fontSize:"23px", fontFamily: "Oswald", color: "white", fontStyle:"italic"} }>
              Bringing hope to the front lines, one rover at a time. 
              </p>
            </div>
            
          </div>  
          <div className="row" class="text-center" style= {{height: "20vh"}}>
            <ClickMee />
          </div>
        </div>
          <div style = {{ height: "4px", backgroundColor: "white",  width:"430px"}}></div>  
          <div id="tp" style={ {height: "100vh", backgroundColor: "#1f1e1e",  width:"430px"} }>
            <AboutTheProject />
          </div>

          <FadeInSection>
          <div id="fade-in-section">
            <div className="row" id="stats" style={ {paddingTop: "5%" , height: "200px", backgroundColor: "#1f1e1e", textAlign: "center"} }>
              <h1 style={{paddingTop:"7%", fontSize: "40px", color: "white", weight: "bold", fontFamily: "Oswald"}}>
                How is Rescue Ranger relevant?</h1>
            </div>          
            <div className="row" id="carousel" style={ {height: "600px", backgroundColor: "#1f1e1e"} }>
              <div style={{marginLeft: "8%", textAlign: "center", width: "90vw", height: "80vh", marginTop:"40%"}}>
                <ControlledCarousel />
              </div>
            </div> 
          </div>
          </FadeInSection>

          <div className="row" id="meet-the-team" style={ {height: "200px", backgroundColor: "#1f1e1e", textAlign: "center"} }>
            <div style = {{height: "4px", backgroundColor: "white"}}></div>
            <h1 style={{fontSize: "45px", color: "white", fontFamily: "Oswald"}}>
              Meet the team behind Rescue Ranger </h1>
          </div>

          <div className="row" style={ {paddingLeft:"3%" , textAlign: "center", height: "1550px", backgroundColor: "#1f1e1e"} }>
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
