import React from 'react';

function AboutTheProject () {
    return (
        <div>
            <h2 class="text-center" style={ {fontSize: "80px", color: "#F85452",
            backgroundSize: "100%", fontFamily: "Alfa Slab One", paddingTop: "25%"} }>
            About the Project
            </h2>
            <p class="text-center" style= { {fontSize:"26px", fontFamily: "Alfa Slab One", backgroundColor: "#fff700", backgroundImage: "linear-gradient(45deg, #fff700, #fdc500)", 
            WebkitBackgroundClip: "text", MozBackgroundClip: "text" , WebkitTextFillColor: "transparent", MozTextFillColor: "transparent",
            paddingLeft: "0%"} }>
            Lores ipsum blah crioulo and etcetera. 
            </p>
        </div>
    );
}

export default AboutTheProject;