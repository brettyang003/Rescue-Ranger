import React from 'react';
import What from "./What.js"

function AboutTheProject () {
    return (
        <div>
            <h2 style={ { paddingLeft: "10%", textAlign: "left", paddingTop:"60px", fontSize: "40px", weight: "bold", color: "white", fontFamily: "Oswald"} }>
                What is Rescue Ranger?
            </h2>
            <p  style= { { paddingTop:"5%", marginLeft:"10%",  marginRight:"10%", textAlign: "left", fontSize:"18px", fontFamily: "Oswald", color:"white"} }>
                A rover that facilitates search and rescue of victims of the current war in Ukraine, who may be lost or stuck amidst the exorbitant amount of debris produced during Russian attacks.
            </p>
            <p  style= { {marginLeft:"10%",  marginRight:"10%", textAlign: "left", fontSize:"18px", fontFamily: "Oswald", color:"white"} }>
                Some of the functionalities of our application and our rovers are listed below.
            </p>
            <What />
        </div>
    );
}

export default AboutTheProject;