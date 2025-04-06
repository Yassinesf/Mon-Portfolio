import React from "react";
import { FaEdit } from "react-icons/fa";

function Testimonial({ t, index, HandleEdit }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{t.comment}</p>

      <div className="testimonial-user">
        <img
          src={t.image || "/default.jpg"}
          alt="user"
          width="80"
          height="80"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "10px"
          }}
        />
        <div className="testimonial-name">{t.name}</div>
        <div className="testimonial-job">{t.job || "Visiteur"}</div>
      </div>
      {HandleEdit && (
        <div className="modifier-container">
          <button className="btn-modifier" onClick={() => HandleEdit(index)}>
            <FaEdit style={{ marginRight: "5px" }} />
            Modifier
          </button>
        </div>
      )}
    </div>
  );
}

export default Testimonial;
