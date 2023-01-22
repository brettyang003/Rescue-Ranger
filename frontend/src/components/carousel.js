import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import saved from '../assets/saved.webp';
import buildings from '../assets/buildings.webp';
import missing from '../assets/missing.webp';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={saved}
          alt="How many people have we rescued"
          style={{borderStyle: "solid", borderWidth: "10px", borderColor: "white"}}
        />
        <Carousel.Caption>
          <h3 style={{fontSize: "50px", fontFamily: "Oswald"}}>15,000+</h3>
          <p style={{fontSize: "30px", fontFamily: "Oswald"}}>People have received help due to our app.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={missing}
          alt="How many people have been missing"
          style={{borderStyle: "solid", borderWidth: "10px", borderColor: "white"}}
        />

        <Carousel.Caption>
          <h3 style={{fontSize: "50px", fontFamily: "Oswald"}}>15,000+</h3>
          <p style={{fontSize: "30px", fontFamily: "Oswald"}}>People have been reported missing since the start of the war.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={buildings}
          alt="How many buildings have collapsed"
          style={{borderStyle: "solid", borderWidth: "10px", borderColor: "white"}}
        />
        <Carousel.Caption>
          <h3 style={{fontSize: "50px", fontFamily: "Oswald"}}>140,000+</h3>
          <p style={{fontSize: "30px", fontFamily: "Oswald"}}>Residential buildings have been damaged or collapsed, creating more and more debris.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;