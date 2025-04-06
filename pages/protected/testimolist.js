import React from "react";
import { useSelector } from "react-redux";
import Testimonial from "@/components/Testimonial";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaBullhorn } from "react-icons/fa";

export default function TestimonialList() {
  const testimonials = useSelector((state) => state.testimonials.list || []);
  const router = useRouter();

  const handleEdit = (index) => {
    const selected = testimonials[index];
    const query = {
      index,
      name: selected.name,
      comment: selected.comment,
    };
    router.push({
      pathname: "/protected/manage",
      query,
    });
  };

  return (
    <Container style={{ paddingTop: "120px" , paddingBottom: "60px"  }}>
      <h2 className="project-heading">Témoignages</h2>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Link href="/protected/manage">
          <button className="btn-ajouter">
            <FaBullhorn style={{ marginRight: "8px" }} />
            Ajouter un témoignage
          </button>
        </Link>
      </div>

      {testimonials.length === 0 ? (
        <p>Aucun témoignage pour l'instant.</p>
      ) : (
        <Row className="g-4 justify-content-center">
          {testimonials.map((t, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Testimonial t={t} index={index} HandleEdit={() => handleEdit(index)} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
