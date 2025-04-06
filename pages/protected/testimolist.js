import React from "react";
import { useSelector } from "react-redux";
import Testimonial from "@/components/Testimonial";
import { Container, Row, Col } from "react-bootstrap";

export default function TestimonialList() {
  const testimonials = useSelector((state) => state.testimonials.list || []);

  return (
    <Container style={{ paddingTop: "120px" }}>
      <h2 className="project-heading">Témoignages</h2>
      {testimonials.length === 0 ? (
        <p>Aucun témoignage pour l'instant.</p>
      ) : (
        <Row className="g-4 justify-content-center">
          {testimonials.map((testimonial, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Testimonial t={testimonial} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
