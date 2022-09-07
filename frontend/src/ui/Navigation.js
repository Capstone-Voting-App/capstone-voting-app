import { Container, Nav, Navbar, } from 'react-bootstrap'
import { SignUpModal } from './signup/SignUpModal'
import { SignInModal } from './signin/SignInModal'
import { useSelector } from 'react-redux'
import { useState } from 'react'


export function Navigation() {
const auth = useSelector(state => state.auth ? state.auth : null);
console.log(auth)



  return (
    <Navbar bg="primary" expand="lg" className="border border rounded-1 border-dark">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

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
          {auth === null ? (
            <>
            <SignUpModal/>
            <SignInModal/>
            </>
            ) : (auth.profileName)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}