import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import navlogo from "../../Assets/img/header-img/logo.svg";
import navcart from "../../Assets/img/header-img/Cart.svg";
import serchImg from "../../Assets/img/header-img/search.svg";
import noti from "../../Assets/img/header-img/Notification.svg";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <>
      <section className="main-box1">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid className="mx-4">
            <Navbar.Brand href="#home">
              <img src={navlogo} alt="dff" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <NavDropdown
                  title="Singapore | USD"
                  id="basic-nav-dropdown"
                  className="nav-drop"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <div className="nav-icons">
              <div className="nav-icons1">
                <button>
                  <img src={navcart} alt="dff1" />
                </button>
              </div>
              <div className="nav-icons1">
                <img src={serchImg} alt="dff2" />
              </div>
              <div className="nav-icons1">
                <button>
                  <img src={noti} alt="dff3" />
                </button>
              </div>
              <button className="nav-btn">C</button>
            </div>
          </Container>
        </Navbar>
      </section>
    </>
  );
}

export default Header;
