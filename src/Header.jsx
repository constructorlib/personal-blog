import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
// import { DiReact } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Header() {
  return (
    <div className="header-all">
      <br />
      <Navbar expand="lg">
        <Container className="justify-content-evenly">
          <Nav>
            <Navbar.Brand href="#">
              <FaReact className="react-icon" />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
            {/* <Nav className="justify-content-center"></Nav>    */}
          </Nav>
          <Nav className="ml-auto mr-auto">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">Experience</Nav.Link>
            <Nav.Link href="#action1">Projects</Nav.Link>
            <Nav.Link href="#action1">Contacts</Nav.Link>
          </Nav>

          <Nav>
            <button type="button" className="btn btn-info btn-round-g">
              =
            </button>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Row className="centered-col" style={{ width: "60%" }}>
          <Col style={{ textAlign: "center" }}>
            <h3 style={{ fontWeight: "900" }} className="typewriter-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis iste debitis, enim illum.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur, esse. Lorem ipsum dolor sit amet.
            </p>
          </Col>
        </Row>
        <br /> <br />
      </Container>
    </div>
  );
}

export default Header;
