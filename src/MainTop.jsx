import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function MainTop() {
  return (
    <Container fluid>
      <Row className="image-row">
        <div className="image-container">
          <Col className="cardMain">
            <img src="src/images/books.jpg" alt="" />
          </Col>
          <Col className="cardMain">
            <img src="src/images/cards.jpg" alt="" />
          </Col>
          <Col className="cardMain">
            <img src="src/images/books.jpg" alt="" />
          </Col>
          <Col className="cardMain">
            <img src="src/images/cards.jpg" alt="" />
          </Col>
          <Col className="cardMain">
            <img src="src/images/books.jpg" alt="" />
          </Col>
          <Col className="cardMain">
            <img src="src/images/cards.jpg" alt="" />
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default MainTop;
