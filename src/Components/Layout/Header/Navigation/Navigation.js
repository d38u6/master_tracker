import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillSetting } from "react-icons/ai";

function Navigation() {
  return (
    <Nav className="justify-content-between">
      <Nav.Link as={NavLink} to="/" exact>
        <AiFillHome /> Home
      </Nav.Link>
      <Nav.Link as={NavLink} to="/settings">
        <AiFillSetting /> Settings
      </Nav.Link>
    </Nav>
  );
}

export default Navigation;
