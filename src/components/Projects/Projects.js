import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/calculator.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="Expense Tracker"
              description="Developed an interactive Expense Tracker web application using React, allowing users to efficiently manage and spend their money."
              ghLink="https://github.com/SiddhanthDubey/Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Chrome Dino Game AI"
              description="Developed an AI-powered system that autonomously learns to play the Chrome Dino game through reinforcement learning Techniques."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Neural Network from Scratch"
              description="Developed a custom neural network framework from scratch in python, bypassing external libraries like TensorFlow and PyTorch"
              ghLink="https://github.com/SiddhanthDubey/NeuralNetworkFromScratch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Emotion Detection"
              description="Trained a CNN classifier using a dataset I built with Keras and tensorflow backened. The classifier sucessfully predicted the type of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/SiddhanthDubey/EmotionDetector"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
