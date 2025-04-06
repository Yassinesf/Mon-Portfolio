import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="/Yassine Sfaira.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger le CV
          </Button>
        </Row>

        <Row className="resume justify-content-center mt-4" style={{ gap: "20px" }}>
          <Col xs={12} md={6} lg={5}>
            <img
              src="/Photo1.png"
              alt="CV Page 1"
              style={{ width: "100%", height: "auto", borderRadius: "10px"}}
            />
          </Col>
          <Col xs={12} md={6} lg={5}>
            <img
              src="/Photo2.png"
              alt="CV Page 2"
              style={{ width: "100%", height: "auto", borderRadius: "10px"}}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
