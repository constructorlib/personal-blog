import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function MainTop() {
  return (
    <>
      <Container>
        <Row>
          <Col className="cardMain">
            1
            <img src="images/books.jpg" alt="" />
          </Col>
          <Col className="cardMain">2</Col>
          <Col className="cardMain">3</Col>
          <Col className="cardMain">4</Col>
          <Col className="cardMain">5</Col>
          <Col className="cardMain">6</Col>
        </Row>
      </Container>
    </>
  );
}
export default MainTop;
