import AboutCard from "@/components/AboutCard";
import Particle from "@/components/Particle";
import Techstack from "@/components/Techstack";
import Toolstack from "@/components/Toolstack";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>

          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px"
            }}
          >
            <AboutCard />
          </Col>
        </Row>

        <Row className="mt-5 d-flex align-items-start justify-content-center flex-wrap">
          {/* Environnement de travail à gauche */}
          <Col md={6} xs={12} className="pe-md-4 mb-5">
            <h2 className="project-heading text-end">
              <strong>Mon Environnement de travail</strong>
            </h2>
            <Toolstack />
          </Col>

          {/* Langages de programmation à droite */}
          <Col md={6} xs={12} className="ps-md-4 mb-5">
            <h2 className="project-heading text-end">
             <strong> Mes Langages de programmation</strong>
            </h2>
            <Techstack />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

