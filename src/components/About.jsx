import React from 'react';
import { Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import './About.css'; // Import custom CSS if needed

const About = () => {
  return (
    <Container className="about-container">
      <h1 className="about-title text-center">About Me</h1>
      <p className="about-description text-center">
        I am a 3rd year B.Tech student in Computer Science and Engineering. I have a strong foundation in various programming languages and technologies. My passion lies in web development and problem-solving, and I continuously strive to learn and improve my skills.
      </p>

      <h2 className="skills-title text-center">Skills</h2>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Card className="skills-card">
            <Card.Body>
              <Card.Title>Technical Skills</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>HTML</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>MongoDB</ListGroup.Item>
                <ListGroup.Item>SQL</ListGroup.Item>
                <ListGroup.Item>C Language</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    

      <h2 className="education-title text-center">Education</h2>
      <p className="education-description text-center">
        I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at SRMIST, where I have gained a solid foundation in computer science principles and practices.
      </p>
    </Container>
  );
};

export default About;
