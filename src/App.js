import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import "./App.css";
import { Col, Container, Nav, NavItem, Row } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import Topbar from "./components/content/Topbar";
import SidebarProvider from "./context/sideBarContext";
import { faBriefcase, faCopy, faHome, faImage, faPaperPlane, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubMenu from "./components/sidebar/SubMenu";

const App = () => {
  const submenus = [
    [
      {
        title: "Home 1",
        target: "Home-1",
      },
      {
        title: "Home 2",
        target: "Home-2",
      },
      {
        itle: "Home 3",
        target: "Home-3",
      },
    ],
    [
      {
        title: "Page 1",
        target: "Page-1",
      },
      {
        title: "Page 2",
        target: "Page-2",
      },
    ],
  ];


  return (
    <SidebarProvider>
      <Router>
        <div className="App wrapper">
          <SideBar title="Dummy Heading">
            <Nav className="flex-column list-unstyled pb-3">
              <SubMenu title="Home" icon={faHome} items={submenus[0]} />
              <NavItem className="pl-3">
                <NavLink tag={Link} to={"/about"}>
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                    About
                    </NavLink>
              </NavItem>

              <SubMenu title="Pages" icon={faCopy} items={submenus[1]} />
              <NavItem className="pl-3">
                <NavLink tag={Link} to={"/portfolio"}>
                  <FontAwesomeIcon icon={faImage} className="mr-2" />
            Portfolio
          </NavLink>
              </NavItem>
              <NavItem className="pl-3">
                <NavLink tag={Link} to={"/faq"}>
                  <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
              </NavItem>
              <NavItem className="pl-3">
                <NavLink tag={Link} to={"/contact"}>
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
              </NavItem>
            </Nav>
          </SideBar>

          <Container fluid>
            <Content>
              <Row>
                <Col>
                  <Topbar />
                  <Switch>
                    <Route exact path="/" component={() => "Hello"} />
                    <Route exact path="/about" component={() => "About"} />
                    <Route exact path="/pages" component={() => "Pages"} />
                    <Route exact path="/faq" component={() => "FAQ"} />
                    <Route exact path="/portfolio" component={() => "Portfolio"} />
                    <Route exact path="/contact" component={() => "Contact"} />
                    <Route exact path="/home-1" component={() => "Home-1"} />
                    <Route exact path="/home-2" component={() => "Home-2"} />
                    <Route exact path="/home-3" component={() => "Home-3"} />
                    <Route exact path="/page-1" component={() => "Page-1"} />
                    <Route exact path="/page-2" component={() => "Page-2"} />
                    <Route exact path="/page-3" component={() => "Page-3"} />
                    <Route exact path="/page-4" component={() => "Page-4"} />
                  </Switch>
                </Col>
              </Row>
            </Content>
          </Container>
        </div>
      </Router>
    </SidebarProvider>
  );
};

export default App;
