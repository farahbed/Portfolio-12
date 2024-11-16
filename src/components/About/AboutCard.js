import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="purple">Farah Bendriss</span>, from 
            <span className="purple"> Épinay-sous-Sénart, France</span>.
            <br />
            Passionate about web development, I am currently looking for a front-end developer position. I recently 
            completed a comprehensive front-end development training at OpenClassroom, where I gained strong skills in 
            HTML, CSS, JavaScript, and React.
            <br />
            <br />
            What excites me about development is the ability to create seamless and interactive user experiences, 
            leveraging the latest technologies. I particularly enjoy working on projects where I can solve real-world problems 
            while constantly learning and improving.
            <br />
            <br />
            Outside of coding, I love exploring new horizons. I’m especially passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring innovative technologies and web development trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books, especially on technology and personal development
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling to discover new cultures and draw inspiration from different lifestyles
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "My goal is to create innovative digital solutions that bring real value and enhance the user experience."
          </p>
          <footer className="blockquote-footer">Farah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
