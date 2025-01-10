import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { TbSend2 } from "react-icons/tb";

function Contact() {

  return (
    <>
      <Container className="contact-heading">
        <h1>
          <strong className="cyan">Contact </strong> Me
        </h1>
        <p>
          Feel free to <span className="cyan">connect </span>with me
        </p>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col md={2} className="contact-section">
            <Form.Group controlId="formName">
              <Form.Label >Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
          </Col>
          <Col md={4} className="contact-section">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Mail Id" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="contact-section">
            <Form.Group controlId="formMessage">
              <Form.Label >Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                placeholder="Enter your message"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col>
            <Button className = "submit-button" variant="primary" type="submit">
            <span className="cyan">Submit </span>
              <TbSend2 style={{color:"#469EB7 "}}/>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" style={{marginTop:"0px", paddingTop:"0px"}}>
            <ul className="home-about-social-links">
                <li className="social-icons">
                    <a
                        href="https://github.com/GaneshInduri9"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <AiFillGithub/>
                    </a>
                </li>
                <li className="social-icons">
                    <a
                    href="https://www.instagram.com/induripatel"
                    target="_blank"
                    rel="noreferrer"className="icon-colour  home-social-icons"
                    >
                        <AiFillInstagram />
                    </a>
                </li>
                <li className="social-icons">
                    <a
                    href="https://www.linkedin.com/in/ganeshinduri9"
                    target="_blank"
                    rel="noreferrer"className="icon-colour  home-social-icons"
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
    
  );
}

export default Contact;
