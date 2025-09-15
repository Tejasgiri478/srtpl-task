import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <Container fluid className="bg-light text-center py-5 bg-image-hero">
      <Row className="align-items-center">
        <Col>
          <h1 className="display-4 text-success fw-bolder">
            Welcome to EcoBottle
          </h1>
          <p className="lead text-white">
            Sustainable and Stylish Bottles for Every Occasion
          </p>
          <Button variant="primary" size="lg">
            <Link to="/products" className="text-white text-decoration-none">
              Shop Now
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
