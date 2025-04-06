import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTestimonial, editTestimonial } from "@/features/testimonialSlice";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

export default function ManageTestimonial() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [form, setForm] = useState({ name: "", comment: "" });
  const [index, setIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (router.query.name && router.query.comment) {
      setForm({
        name: router.query.name,
        comment: router.query.comment,
      });
      setIndex(Number(router.query.index));
    }
  }, [router.query]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!form.name) validationErrors.name = "Le nom est requis.";
    if (!form.comment) validationErrors.comment = "Le témoignage est requis.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    if (index !== null) {
      dispatch(editTestimonial({ index, ...form }));
      setSuccess("Témoignage modifié avec succès !");
    } else {
      dispatch(addTestimonial(form));
      setSuccess("Témoignage ajouté avec succès !");
    }

    setTimeout(() => {
      router.push("/protected/testimolist");
    }, 1500);
  };

  return (
    <Container style={{ paddingTop: "120px" }}>
      <h2 className="project-heading">
        {index !== null ? "Modifier" : "Ajouter"} un témoignage
      </h2>

      {success && <p className="auth-success">{success}</p>}

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          className="auth-input"
        />
        {errors.name && <p className="auth-error">{errors.name}</p>}

        <textarea
          name="comment"
          placeholder="Votre témoignage"
          value={form.comment}
          onChange={handleChange}
          className="auth-input"
        />
        {errors.comment && <p className="auth-error">{errors.comment}</p>}

        <button type="submit" className="auth-button">
          {index !== null ? "Modifier" : "Ajouter"}
        </button>
      </form>
    </Container>
  );
}
