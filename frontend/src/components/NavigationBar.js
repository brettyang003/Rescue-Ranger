import React from "react";
import NavItem from "./NavItem.js"
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{fontFamily: "Oswald", fontSize:"30px"}}>Rescue Ranger</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{paddingLeft:"78%"}}>
                <NavItem address="/" page="HOME"/>
                <NavItem address="/Map.js" page="MAP"/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
