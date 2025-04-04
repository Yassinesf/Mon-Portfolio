import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/features/userSlice";
import { useRouter } from "next/router";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const users = useSelector((state) => state.user.users);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    const userFound = users.find(
      (user) =>
        user.username === form.username &&
        user.password === form.password
    );

    if (userFound) {
      dispatch(login(form));
      router.push("/about"); // redirection vers la page d'accueil
    } else {
      setError("Nom d'utilisateur ou mot de passe incorrect.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Connexion</h2>
      {error && <p className="auth-error">{error}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
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
        <button className="auth-button" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
}
