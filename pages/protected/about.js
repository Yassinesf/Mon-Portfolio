import AboutCard from "@/components/AboutCard";
import Languages from "@/components/Languages";
import Outils from "@/components/Outils";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container fluid className="about-section">
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

        <Row>
          <Col md={6} xs={12}>
            <h2>
              <strong>Mon Environnement de travail</strong>
            </h2>
            <Outils />
          </Col>
          <Col md={6} xs={12}>
            <h2>
              <strong>Mes Langages de programmation</strong>
            </h2>
            <Languages />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
