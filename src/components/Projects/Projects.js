import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import des images de projets
import ninacarducci from "../../Assets/Projects/ninacarducci.png";
import booki from "../../Assets/Projects/booki.png";
import ohMyFood from "../../Assets/Projects/ohmyfood.png";

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
              imgPath={ninacarducci}
              isBlog={false}
              title="Nina Carducci"
              description="Un portfolio personnel amélioré en termes d'accessibilité, de performance et de SEO. Ce projet se concentre sur la création d'une interface utilisateur optimale et accessible tout en maximisant la performance et en optimisant les meta pour un meilleur référencement."
              ghLink="https://github.com/farahbed/ninacarducci.git"
              demoLink="https://ninacarducci-navy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booki}
              isBlog={false}
              title="Booki"
              description="Un site web de réservation d'hébergements réalisé uniquement avec HTML et CSS. Ce projet présente un design élégant et une mise en page responsive."
              ghLink="https://github.com/farahbed/booki-starter-code-master.git"
              demoLink="https://booki-starter-code-master.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ohMyFood}
              isBlog={false}
              title="OhMyFood"
              description="Une application web dédiée à la réservation de menus dans des restaurants. Développement en HTML, CSS et animations pour améliorer l'expérience utilisateur."
              ghLink="https://github.com/farahbed/ohmyfood.git"
              demoLink="https://ohmyfood-8hzofmbp6-farahbeds-projects.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
