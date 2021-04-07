import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { SidebarContext } from '../../context/sideBarContext';
import {
  Navbar,
  Button,
  Nav,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Topbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <Navbar
      bg="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="lg"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to={"/page-1"}>
            page 1
            </Nav.Link>

          <Nav.Link as={Link} to={"/page-2"}>
            page 2
            </Nav.Link>

          <Nav.Link as={Link} to={"/page-3"}>
            page 3
            </Nav.Link>

          <Nav.Link as={Link} to={"/page-4"}>
            page 4
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
