import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "@/features/userSlice";
import { useRouter } from "next/router";

export default function Signup() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // reset erreur si l’utilisateur corrige
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setError("Tous les champs sont requis.");
      return;
    }

    if (!validatePassword(form.password)) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    dispatch(register(form));
    router.push("/login");
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Inscription</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          className="auth-input"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="auth-input"
          value={form.password}
          onChange={handleChange}
        />

        {error && <p className="auth-error">{error}</p>}

        <button type="submit" className="auth-button">
          S'inscrire
        </button>
      </form>

      <p style={{ marginTop: "20px", fontSize: "1rem" }}>
        Vous avez déjà un compte ?{" "}
        <a href="/login" style={{ color: "red", fontWeight: "bold" }}>
          Se connecter
        </a>
      </p>
    </div>
  );
}
