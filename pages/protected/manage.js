import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTestimonial, editTestimonial } from "@/features/testimonialSlice";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

export default function ManageTestimonial({ existingData }) {
  const [form, setForm] = useState(existingData || { name: "", comment: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.comment) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (existingData) {
      dispatch(editTestimonial({ index: existingData.index, ...form }));
    } else {
      dispatch(addTestimonial(form));
      setSuccess(true);
      setTimeout(() => {
        router.push("/protected/testimolist");
      }, 1500);
    }
  };

  return (
    <Container style={{ paddingTop: "120px" }}>
      <h2 className="project-heading">
        {existingData ? "Modifier" : "Ajouter"} un témoignage
      </h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Témoignage ajouté avec succès !</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          className="auth-input"
        />
        <textarea
          name="comment"
          placeholder="Votre témoignage"
          value={form.comment}
          onChange={handleChange}
          className="auth-input"
        />
        <button type="submit" className="auth-button">
          {existingData ? "Modifier" : "Ajouter"}
        </button>
      </form>
    </Container>
  );
}
