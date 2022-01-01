import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../public/pazuruLogo.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

var navigationDark = {
  font: "600 14px/30px Montserrat,sans-serif",
  transition: "all 0.12s ease-in-out 0s",
  color: "rgba(15, 15, 15, 0.678)",
  textTransform: "uppercase",

  position: "relative",
  padding: "8px",
  cursor: "pointer",
  transition: "all .2s linear",
};

var navigationLight = {
  font: "600 14px/30px Montserrat,sans-serif",
  transition: "all 0.12s ease-in-out 0s",
  color: "#fff",
  textTransform: "uppercase",

  position: "relative",
  padding: "8px",
  cursor: "pointer",
  transition: "all .2s linear",
};

export default function Navbare(props) {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    let y = window.scrollY;
    if (y >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const changeBackground = () => {
      let y = window.scrollY;
      if (y >= 70) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
    return () => {
      cleanup;
    };
  }, []);
  return (
    <Navbar
      className={navbar ? "navbar active" : "navbar"}
      collapseOnSelect
      expand="sm"
      fixed="top"
    >
      <Navbar.Brand
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={Logo} alt="logo" width="40" height="40" />{" "}
        <p style={{ color: "white", margin: 0 }}>Pazuru</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        expand="lg"
        className="justify-content-end"
      >
        <Nav className="ml-auto">
          <Nav.Link
            href="#service"
            style={navbar ? navigationLight : navigationDark}
          >
            Service
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            style={navbar ? navigationLight : navigationDark}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            href="#skill"
            style={navbar ? navigationLight : navigationDark}
          >
            Skill
          </Nav.Link>

          <Nav.Link
            href="#aPropos"
            style={navbar ? navigationLight : navigationDark}
          >
            A propos
          </Nav.Link>
          <NavDropdown
            title="Theme"
            id={navbar ? "nav-Light" : "collasible-nav-dropdown"}
          >
            <NavDropdown.Item
              onClick={() => props.changeWord("light")}
              id="changeTheme"
            >
              Light
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => props.changeWord("dark")}
              id="changeTheme"
            >
              Sombre
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            href="#contact"
            style={navbar ? navigationLight : navigationDark}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
