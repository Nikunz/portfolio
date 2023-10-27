import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1 style={{ fontsize: "1.75"}}>
          Hi Everyone, I am <span className="purple"> Nikunz Koppula </span>
            from <span className="purple"> Toronto, Canada.</span>
          </h1>    
          <p style={{ textAlign: "justify" }}>
            <br /> 
            <br />
            I have worked on various projects and technologies such as AWS, Docker, Kubernetes, Jenkins, Gitlab. 
            <br />
            <br />
            Additionally, I am currently employed as a <span className="purple"> Junior DevOps Engineer </span>at 
            Moneris Solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing codes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nikunz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
