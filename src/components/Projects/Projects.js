import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import des images de projets
import kasa from "../../Assets/Projects/kasa.png";
import booki from "../../Assets/Projects/booki.png";
import ohMyFood from "../../Assets/Projects/ohMyFood.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets Récents</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici une sélection de projets que j'ai réalisés.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              isBlog={false}
              title="Kasa"
              description="Une plateforme de location immobilière développée avec React. Inclut une gestion dynamique des pages d'annonces et une interface utilisateur responsive."
              ghLink="https://github.com/farahbed/Kasa"
              demoLink="https://kasa-demo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booki}
              isBlog={false}
              title="Booki"
              description="Un site web de réservation d'hébergements réalisé uniquement avec HTML et CSS. Ce projet présente un design élégant et une mise en page responsive."
              ghLink="https://github.com/farahbed/Booki"
              demoLink="https://booki-demo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ohMyFood}
              isBlog={false}
              title="OhMyFood"
              description="Une application web dédiée à la réservation de menus dans des restaurants. Développement en HTML, CSS et animations pour améliorer l'expérience utilisateur."
              ghLink="https://github.com/farahbed/OhMyFood"
              demoLink="https://ohmyfood-demo.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
