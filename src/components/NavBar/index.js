"use client"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="sobreNos">Sobre Nós</Nav.Link>
            <Nav.Link href="galeriaDeFotos">Galeria de Fotos</Nav.Link>
            <Nav.Link href="presentes">Presentes</Nav.Link>
            <Nav.Link href="depoimentos">Depoimentos</Nav.Link>
            {/* <Nav.Link href="mapaInterativo">Mapa Interativo</Nav.Link> */}
            <Nav.Link href="faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      <h3>Glauco & Jayne</h3>
      </Container>
    </Navbar>
  );
}