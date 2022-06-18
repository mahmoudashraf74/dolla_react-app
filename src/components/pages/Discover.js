import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./About.css";
import discover from "../../Assist/images/Discover.svg";
const Discover = () => {
  return (
    <div
      className="Discover"
      id="discover"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <Container>
        <Row>
          <Col xs={12} md={6} className="About-text">
            <h6>JOIN OUR TEAM</h6>
            <h1>
              Creating an <br />
              account is
              <br /> extremely easy
            </h1>
            <p>
              Get everything set up and ready in under 10 <br />
              minutes ,All you need to do is add your <br />
              information and you 're ready to go.
              <br />
              <br />
              <Button variant="success">Start Now</Button>{" "}
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img src={discover} alt="pic1" className="About-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Discover;
