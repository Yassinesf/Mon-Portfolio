import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <div className="about-custom-layout">
      {/* Image en haut */}
      <div className="about-image-container">
        <img
          src="/photo.png"
          alt="Yassine Sfaira"
          className="about-avatar hover-effect"
        />
      </div>

      {/* BIO + COMPETENCES */}
      <div className="about-bio-comp">
        {/* Biographie à gauche */}
        <div className="bio-section">
          <h1 className="project-heading">BIOGRAPHIE :</h1>
          <p style={{ textAlign: "justify" }}>
            Je m'appelle <b className="purple">Yassine Sfaira</b>, j’ai 19 ans et je suis actuellement étudiant en deuxième année du programme de
            <b className="purple"> programmation informatique</b> au <b className="purple">Collège La Cité</b>, à Ottawa.
            <br /><br />
            Depuis toujours passionné par le monde de la <b className="purple">technologie</b>, je m'intéresse particulièrement au
            <b className="purple"> développement web</b>, à la <b className="purple">cybersécurité</b> ainsi qu’à la création
            d’<b className="purple">applications modernes</b> utilisant des technologies comme <b className="purple">React.js</b>, <b className="purple">Next.js</b> et <b className="purple">Node.js</b>.
            <br /><br />
            Je continue à perfectionner mes compétences en <b className="purple">JavaScript</b>, <b className="purple">C++</b>, et sur des outils Linux tels que <b className="purple">Kali</b>,
            tout en explorant d’autres langages de programmation comme <b className="purple">Java</b>, <b className="purple">HTML</b>, <b className="purple">CSS</b>, <b className="purple">Kotlin</b> et <b className="purple">SQL</b>.
            <br /><br />
            Doté d’un esprit <b className="purple">curieux</b>, <b className="purple">autonome</b> et <b className="purple">motivé</b>, je m'efforce de développer des solutions
            à la fois <b className="purple">performantes</b>, <b className="purple">utiles</b> et <b className="purple">sécurisées</b>.
            <br /><br />
            Mon rêve ultime est de <b className="purple">fonder ma propre entreprise technologique</b>, afin de proposer des solutions innovantes
            qui répondent aux défis de demain. Ce domaine me passionne profondément, et je suis prêt à y consacrer toute mon énergie.
          </p>
        </div>

        {/* Compétences à droite */}
        <div className="skills-section">
          <h2 className="project-heading">COMPÉTENCES :</h2>
          <ul style={{ textAlign: "left", paddingLeft: "1rem" }}>
            <li><b>Langues parlées :</b> Bilingue – Français / Anglais</li>
            <li><b>Langages :</b> Java, JavaScript, HTML, CSS, C++, C#, Kotlin, SQL</li>
            <li><b>Informatique :</b> Word, Excel, PowerPoint, MS Project, Internet</li>
            <li><b>Développement :</b> Conception et administration de sites web</li>
            <li><b>Qualités personnelles :</b> Leadership, Organisation, Résolution de problème</li>
          </ul>

          <h2 className="project-heading">LOISIRS :</h2>
<ul style={{ textAlign: "left", paddingLeft: "1rem", listStyle: "none" }}>
  <li><span className="material-symbols-outlined">sports_soccer</span> Football</li>
  <li><span className="material-symbols-outlined">sports_handball</span> Handball</li>
  <li><span className="material-symbols-outlined">sports_volleyball</span> Volleyball</li>
  <li><span className="material-symbols-outlined">pool</span> Natation</li>
  <li><span className="material-symbols-outlined">movie</span> Cinéma</li>
</ul>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
