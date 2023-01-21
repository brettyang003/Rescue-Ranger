import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ControlledCarousel from "./components/carousel.js";
import AboutTheProject from "./components/About.js";
import Stats from "./components/Stats.js"

function LandingPage() {
  return (
    <div
        className="container-fluid px-0"
      >
          <div className="row" id="project-title" style={ {height: "400px", backgroundColor: "#282828"} }>
            <div className="col-sm">
              <h2 class="text-center" style={ {fontSize: "80px", color: "#F85452",
                backgroundSize: "100%", fontFamily: "Alfa Slab One", paddingTop: "9%"} }>
                  Debris Bot
              </h2>
              <p class="text-center" style= { {fontSize:"26px", fontFamily: "Alfa Slab One", color: "#F85452"} }>
                  Lores ipsum blah crioulo and etcetera. 
              </p>
            </div>
          </div>  

          <div className="row" id="about-the-project" style={ {height: "900px", backgroundColor: "white"} }>
            <div className="col-sm">
              <h1 style={ {fontSize: "80px", color: "#F85452",
                backgroundSize: "100%", fontFamily: "Alfa Slab One", textAlign: "center", paddingTop: "25%"} }>
                  IMAGE
              </h1>
            </div>
            <div className="col-sm">
              <AboutTheProject />
            </div>
          </div>

          <div className="row" id="stats" style={ {height: "500px", backgroundColor: "#121212"} }>
            <div style = {{height: "15px", backgroundColor: "gray"}}></div>
            <h1 style={{textAlign: "center", marginLeft: "25%", marginRight: "10%", fontSize: "50px", color: "white", paddingBottom: "5px", width:"800px"}}>
              What are the numbers since the war has started?</h1>
            <div className="col-sm"> <Stats textOne="More than" number="15,000" textTwo="people missing"/> </div> 
            <div className="col-sm"> <Stats textOne="Over" number="140,000" textTwo="damaged buildings" /> </div>
            <div className="col-sm"> <Stats textOne="More than" number="15,000" textTwo="people missing"/> </div>

          </div> 

          

          <div className="row" id="carousel" style={ {height: "800px", backgroundColor: "white"} }>
            <div style={{marginTop:"7%", marginLeft:"20%", textAlign: "center", backgroundColor: "gray", width: "60vw", height: "80vh"}}>
              <ControlledCarousel />
            </div>
          </div> 
      </div>
  );
}

export default LandingPage;
