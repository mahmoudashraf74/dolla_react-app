import React from "react";
import land from "../../Assist/Videos/Landing.mp4";
import { Button, Row, Col } from "react-bootstrap";
import { MdArrowForwardIos } from "react-icons/md";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <video src={land} muted autoPlay loop />
      <div className="land-text">
        <Row>
          <Col>
            <h1>Virtual Banking Made Easy</h1>
            <p>
              Sign up for new account today and receive $250 <br /> in creidt
              towards your next payment{" "}
            </p>
            <Button variant="success">
              Get Started <MdArrowForwardIos />
            </Button>{" "}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
