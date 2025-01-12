import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TbSend2 } from "react-icons/tb";
import Social from "../Contact/Social";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide} from 'react-toastify';


function Contact() {

  const[submitForm, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [mailid, setMailId] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !mailid || !message) {
      setSubmit(true);
      toast.warning("Please fill all the details!");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: mailid,
      to_name: 'ganesh',
      message: message,
    };

    emailjs
      .send(
        'service_rm1swei',      // Replace with your EmailJS Service ID
        'template_bgd1ucn',     // Replace with your EmailJS Template ID
        templateParams,
        'Jkl-jWpAl5CMr4Ea_'       // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setName("");
          setMailId("");
          setMessage("");
          setSubmit(true);
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.error("Failed to send Email!");
        }
    );
  };

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
            <Form.Group className= "form-group" controlId="formName">
              <Form.Label >Name</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4} className="contact-section">
            <Form.Group className= "form-group" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email"
                placeholder="Mail Id"
                onChange={(e) => setMailId(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="contact-section">
            <Form.Group className= "form-group" controlId="formMessage">
              <Form.Label >Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                placeholder="Enter your message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <p className="confirmation-para">
          *You'll get a <span className="cyan">confirmation email</span> after sending.
        </p>
        <Col>
          <Button className = "submit-button" variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
            <span className="cyan">Submit </span>
            <TbSend2 style={{color:"#469EB7 "}}/>
          </Button>
        </Col>
        
        <Social/>
        {submitForm && (
          <ToastContainer position="top-center" transition={Slide}/>
        )}
      </Container>
    </>
    
  );
}

export default Contact;
