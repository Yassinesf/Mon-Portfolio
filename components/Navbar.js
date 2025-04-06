import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/userSlice";
import { useRouter } from "next/router";
import {
  FaGithub,
  FaUserCircle,
  FaLaptopCode,
  FaQuoteRight,
  FaFileAlt,
  FaSignOutAlt,
  FaPlusCircle,
} from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const currentUser = useSelector((state) => state.user.currentUser);

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

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

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
            onClick={() => updateExpanded(expand ? false : "expanded")}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Link href="/protected/about" onClick={() => updateExpanded(false)}>
                  <FaUserCircle style={{ fontSize: "1.4em", marginBottom: "2px" }} /> À propos
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link href="/protected/project" onClick={() => updateExpanded(false)}>
                  <FaLaptopCode style={{ fontSize: "1.4em", marginBottom: "2px" }} /> Mes Projets
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link href="/protected/resume" onClick={() => updateExpanded(false)}>
                  <FaFileAlt style={{ fontSize: "1.4em", marginBottom: "2px" }} /> Mon CV
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link href="/protected/testimolist" onClick={() => updateExpanded(false)}>
                  <FaQuoteRight style={{ fontSize: "1.4em", marginBottom: "2px" }} /> Témoignages
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

          <div className="fork-btn-wrapper" style={{ display: "flex", gap: "10px" }}>
            {currentUser && (
              <Button className="fork-btn-inner" onClick={handleLogout}>
                <FaSignOutAlt style={{ fontSize: "1.4em" }} /> Se déconnecter
              </Button>
            )}
            <Button
              href="https://github.com/Yassinesf"
              target="_blank"
              className="fork-btn-inner"
            >
              <FaGithub style={{ fontSize: "1.4em" }} /> GitHub
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
