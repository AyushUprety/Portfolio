import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import fit from "../../Assets/Projects/fit.png";
import crypto from "../../Assets/Projects/crypto.png";
import Git from "../../Assets/Projects/Git.png";
import Invoice from "../../Assets/Projects/Invoice.png";
import Notes from "../../Assets/Projects/Notes.png";
import URL from "../../Assets/Projects/URL.png";
import yeti from "../../Assets/Projects/yeti.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yeti}
              isBlog={false}
              title="YetiCamp"
              description="An app that allows users to share and discover hidden camping spots with an interactive map feature, perfect for finding low-traffic and secluded locations with ease."
              ghLink="https://github.com/AyushUprety/RevisedYetiCamp"
              demoLink="https://revised-yeti-camp.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fit}
              isBlog={false}
              title="athelety"
              description="A React-based fitness app providing visual exercise guidance for targeting specific muscle groups"
              ghLink="https://github.com/AyushUprety/atheletY"
              demoLink="https://splendid-sherbet-b558fb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto"
              description="A sleek app for tracking crypto exchange rates and staying current on market trends. Features include real-time rate comparisons and in-depth news analysis."
              ghLink="https://github.com/AyushUprety/CryptoWorld"
              demoLink="https://beamish-travesseiro-725102.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Invoice}
              isBlog={false}
              title="Bill Generator"
              description="A simple invoice generator app"
              ghLink="https://github.com/AyushUprety/BillGenerator"
              demoLink="https://bill-generator-umber.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Git}
              isBlog={false}
              title="TraceMaster"
              description="Checks who follows you and who doesnot on github"
              ghLink="https://github.com/AyushUprety/TraceMaster"
              demoLink="https://trace-master-ictj.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Notes}
              isBlog={false}
              title="NoteX"
              description="A compact note taking web application"
              ghLink="https://github.com/AyushUprety/NoteX"
              demoLink="https://note-x-rtve.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={URL}
              isBlog={false}
              title="URL shortnere"
              description="An app to generate short URL for the URL given by user"
              ghLink="https://github.com/AyushUprety/urlShortner"
              demoLink="https://url-shortner-gold-zeta.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
