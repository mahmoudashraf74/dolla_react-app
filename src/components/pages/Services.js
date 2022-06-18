import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import "./Services.css";
import expenses from "../../Assist/images/Discover.svg";
import office from "../../Assist/images/office.svg";
import growth from "../../Assist/images/growth.svg";

const Services = () => {
  return (
    <div className="services" id="services">
      <Container>
        <h1 className="head">Our Services</h1>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={expenses} />
            <Card.Body>
              <Card.Title>Reduce Expenses</Card.Title>
              <Card.Text>
                We help reduce youe fess
                <br /> and increase your overall revenue.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={office} />
            <Card.Body>
              <Card.Title>Virtual Offices</Card.Title>
              <Card.Text>
                You can acess our platform <br />
                online anywhere in the world
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={growth} />
            <Card.Body>
              <Card.Title>Premium Benefits</Card.Title>
              <Card.Text>
                Unlock our special <br /> mempership card that <br />
                returns 5% cash back.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
