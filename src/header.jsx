import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import { FaIcon } from "react-icons/fa";

function Header() {
  return (
    <div className="header-all">
      <br />
      <Navbar expand="lg">
        <Container className="justify-content-evenly">
          <Nav>
            <Navbar.Brand href="#">P</Navbar.Brand>
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
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis iste debitis, enim illum rerum consectetur unde
              voluptas.
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;

// <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             {/* <Nav.Link href="#action2">Link</Nav.Link> */}
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             {/* <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link> */}
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
