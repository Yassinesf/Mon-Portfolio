import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { FaGithub, FaHome, FaUserCircle, FaLaptopCode, FaQuoteRight, FaFileAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollHandler);
  }

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Link href="/" onClick={() => updateExpanded(false)}>
                  <FaHome style={{ fontSize: "1.4em", marginBottom: "2px" }} /> Acceuil
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link href="/about" onClick={() => updateExpanded(false)}>
                  <FaUserCircle style={{ fontSize: "1.4em", marginBottom: "2px" }} /> À propos
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link href="/project" onClick={() => updateExpanded(false)}>
                  <FaLaptopCode style={{ fontSize: "1.4em", marginBottom: "2px" }} /> Projets
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link href="/testimonials" onClick={() => updateExpanded(false)}>
                  <FaQuoteRight style={{ fontSize: "1.4em", marginBottom: "2px" }} /> Testimonials
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link href="/resume" onClick={() => updateExpanded(false)}>
                  <FaFileAlt style={{ fontSize: "1.4em", marginBottom: "2px" }} /> Mon CV
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="fork-btn-wrapper">
        <Button
          href="https://github.com/Yassinesf"
          target="_blank"
          className="fork-btn-inner"
        >
          <FaGithub style={{ fontSize: "1.4em" }} /> GitHub
        </Button>
      </div>
    </>
  );
}

export default NavBar;
