import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const Header = ({ handleShow }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://banner2.cleanpng.com/20180531/sas/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ab26fd7.9058729715277494027309.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>{" "}
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">About Us</Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={handleShow}>
          Add User
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
