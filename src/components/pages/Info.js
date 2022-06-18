import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./About.css";
import discover from "../../Assist/images/credit.svg";
const Info = () => {
  return (
    <div
      className="Discover"
      style={{ backgroundColor: "white", color: "black" }}
      id="info"
    >
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src={discover} alt="pic1" className="About-img" />
          </Col>
          <Col xs={12} md={6} className="About-text">
            <h6>UNLIMITED ACCESS</h6>
            <h1>
              Login to your <br />
              account at any
              <br /> time
            </h1>
            <p>
              We have coverd no matter where you are <br />
              located.All you need an intrnet connection <br />
              and a phone or computer.
              <br />
              <br />
              <Button variant="dark">Learn More</Button>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
