import ProjectCards from "@/components/ProjectCards";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
            <strong className="purple">MES PROJETS </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets que j'ai faits, avec leurs liens  : GitHub 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="/Projects/Nouvelle Conference.png"
              isBlog={false}
              title="Nouvelle Conference"
              description="Un site web de conférence professionnelle conçu avec HTML et CSS. Il permet de présenter les conférenciers, le programme de l’événement et le lieu de la conférence. Le site inclut également une section de contact et un formulaire d’inscription pour réserver une place. L’interface est responsive et offre une navigation fluide pour tous les types d’appareils."
              ghLink="https://github.com/Yassinesf/Nouvelle-Conference.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="/Projects/Gestion Medicale.png"
              isBlog={false}
              title="Application de Gestion Médicale (WPF)"
              description="Une application desktop développée avec WPF en C# pour gérer efficacement le personnel médical (docteurs, infirmiers) ainsi que les départements d’un hôpital. Elle permet l’ajout, la modification, la suppression et la recherche d’informations. L’interface est claire, intuitive, multilingue et comprend une gestion des consultations médicales."
              ghLink="https://github.com/Yassinesf/Gestion-Medicale.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="/Projects/Converter.png"
              isBlog={false}
              title="Convertisseur d'unité"
              description="UnitsConvertor est une application graphique développée en WPF permettant de convertir facilement les unités de mesure les plus courantes. L'interface conviviale offre un accès rapide aux quatre grandes catégories de conversions, Technologies utilisées : C# / WPF pour l’interface utilisateur XAML pour la mise en page graphique MVVM  pour la séparation logique"
              ghLink="https://github.com/Yassinesf/Units-convertor.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
