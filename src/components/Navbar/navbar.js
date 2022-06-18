import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">dolla</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0 m-auto">
              <a  href="#about">About</a>
              <a  href="#discover">Discover</a>
              <a href="#services">Services</a>
              <Link to="signup">Sign Up</Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="success" href="signin">Sign In</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;
