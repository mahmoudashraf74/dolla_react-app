import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./About.css";
import about from "../../Assist/images/About.svg";
const About = () => {
  return (
    <div className="About" id="about" style={{ backgroundColor: "black", color: "white" }}>
      <Container>
        <Row>
          <Col xs={12} md={6} className="About-text">
            <h6>PREMIUM BANK</h6>
            <h1>
              Unlimited <br />
              Transactions with <br />
              zero faces
            </h1>
            <p>
              Get access to our exclusive app that allow you <br />
              to send unlimted transactions without getting <br />
              charged any fees
              <br />
              <br />
              <Button variant="success">Get Started</Button>{" "}
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img src={about} alt="pic1" className="About-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
