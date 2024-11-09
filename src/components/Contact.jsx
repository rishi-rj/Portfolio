import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import './Contact.css'; // Import custom CSS if needed

const Contact = () => {
  return (
    <Container className="contact-container">
      <h1 className="contact-title text-center">Get in Touch</h1>
      <p className="contact-intro text-center">
        I’d love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out through any of the platforms below.
      </p>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Card className="contact-card">
            <Card.Body>
              <Card.Title>Contact Details</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Phone:</strong> 
                  <a href="tel:+12345678901" className="contact-link"> +91 9934128903</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email:</strong> 
                  <a href="mailto:your-email@example.com" className="contact-link"> rr3512@srmist.edu.in</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>GitHub:</strong> 
                  <a href="https://github.com/rishi-rj" target="_blank" rel="noopener noreferrer" className="contact-link"> github.com/rishi-rj</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>LinkedIn:</strong> 
                  <a href="https://www.linkedin.com/in/rishi-raj-478261252/" target="_blank" rel="noopener noreferrer" className="contact-link"> rishi-raj</a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p className="contact-note">
            I look forward to connecting with you!
          </p>
          <Button variant="primary" href="mailto:your-email@example.com" target="_blank">Send an Email</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
