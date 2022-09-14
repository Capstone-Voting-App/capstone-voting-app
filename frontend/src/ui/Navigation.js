import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap'
import { SignUpModal } from './signup/SignUpModal'
import { SignInModal } from './signin/SignInModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth } from '../store/auth'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SignOutComponent } from './SignOut'
import { PersonBadge } from 'react-bootstrap-icons'


export function Navigation() {
  const auth = useSelector (state => state.auth ?? null)
  const dispatch = useDispatch()
  const initialEffects = () => {
    dispatch(fetchAuth())
  }
  useEffect(initialEffects, [dispatch])

// export const Navigation = (props) => {
//
//   const auth = useSelector(state => state.auth ? state.auth : null);
//
//   const dispatch = useDispatch()
//   const effects = () => {
//     dispatch(fetchAuth());
//   };
//   const inputs = [];
//   useEffect(effects, inputs);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // isModalOpen prevents the sign in modal being removed from the dom before the
  // sign-in modal is closed by the user
  const isModalOpen = ()=> {
    if(!auth) {
      return !auth
    } else if(show === true && auth  ) {
      return true
    }
  }
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
          {auth?.profileIsInstructor && (
          <Nav>
            <Nav.Link href="./Instructor">Instructor</Nav.Link>
          </Nav>)}
          {auth !== null && (
            <>
              <NavDropdown className="nav-link navbar-username" title={auth?.profileName ?? ""} >
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