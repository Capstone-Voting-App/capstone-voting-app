import { Container, Image, Nav, Navbar, NavDropdown, } from 'react-bootstrap'
import { SignUpModal } from './signup/SignUpModal'
import { SignInModal } from './signin/SignInModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth } from '../store/auth'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SignOutComponent } from './SignOut'
import { PersonBadge } from 'react-bootstrap-icons'
import Diver from '../deep-diver.png'

function changeBackground(color) {
  document.body.style.background = color
}
window.addEventListener("load",function() { changeBackground('#efefef') });

export function Navigation() {

  const style = {
    backgroundColor: "#003a70",
    color: "#F7F1DE"
  };
  const linkStyle = {
    color: "#f6be00",
  };

  const auth = useSelector (state => state.auth ?? null)
  const dispatch = useDispatch()
  const initialEffects = () => {
    dispatch(fetchAuth())
  }
  useEffect(initialEffects, [dispatch])

  function changeBackground(color) {
    document.body.style.background = color
  }
  window.addEventListener("load",function() { changeBackground('#efefef')});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isModalOpen = ()=> {
    if(!auth) {
      return !auth
    } else if(show === true && auth  ) {
      return true
    }
  }
  return (

    <Navbar expand="lg" className="border border rounded-1 border-dark" style={style}>

      <Container fluid>
        <Navbar.Brand href="/"><Image src={Diver} alt="diver" id="diver" className="border rounded rounded-circle"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav>
            <Nav.Link href="./UserInput" style={linkStyle}>Idea Submit</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="./Ranking" style={linkStyle}>Ranking</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="./Voting" style={linkStyle}>Voting</Nav.Link>
          </Nav>
          {auth?.profileIsInstructor && (
          <Nav>
            <Nav.Link href="./Instructor" style={linkStyle} className="me-auto">Instructor</Nav.Link>
          </Nav>)}
          {auth !== null && (
            <>
              <NavDropdown className="ms-auto nav-link navbar-username" title={auth?.profileName ?? ""} >
                <div className="dropdown-item">
                  <Link to={`/profile/${auth?.profileId}`} className="btn btn-outline-dark">
                    <PersonBadge/>&nbsp;&nbsp;My Profile
                  </Link>
                </div>
                <SignOutComponent />
              </NavDropdown>
            </>
          )}
          {isModalOpen()  &&  (
            <>
              <SignUpModal/>
              <SignInModal show={show} handleClose={handleClose} handleShow={handleShow}/>
            </>
          )}
          {/*{auth === null ? (*/}
          {/*  <>*/}
          {/*  <SignUpModal/>*/}
          {/*  <SignInModal/>*/}
          {/*  </>*/}
          {/*  ) : (auth.profileName)}*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}