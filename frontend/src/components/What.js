import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

function What() {
  return (
    <div style={{paddingLeft:"10%", paddingRight: "10%", fontFamily: "Oswald"}}>
        <ListGroup>
        <ListGroup.Item>Our customized robots navigate through debris in a way that humans cannot.</ListGroup.Item>
        <ListGroup.Item>Our rovers perform facial recognition after detecting motion.</ListGroup.Item>
        <ListGroup.Item>Our database hosts all people encountered so far, with a picture (captured by our rovers) and their location.</ListGroup.Item>
        <ListGroup.Item>Our team of engineers plans on implementing drones with heat sensors, to facilitate the navigation and detect people with restricted movement.</ListGroup.Item>
        </ListGroup>
    </div>
    );
}

export default What;