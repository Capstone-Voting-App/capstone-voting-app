import { Container, Nav, Navbar } from 'react-bootstrap'

export function Navigation() {
  return (
    <Navbar bg="primary" expand="lg" className="border border rounded-1 border-dark">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="./SignIn">Sign In</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="./UserInput">Idea Submit</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="./Ranking">Ranking</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="./Voting">Voting</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="./Instructor">Instructor</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}